import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';
import AuthServices from '../../../services/AuthServices';
import { storage } from '../../../firebase/config';
import BarcodeService from '../../../services/BarcodeService'
import SignUpForm from './SignUpForm';
import SignUpForm1 from './SignUpForm1';
import SignUpForm2 from './SignUpForm2';
import axiosHandler from '../../../helpers/errorHandler';
import successHandler from '../../../helpers/successHandler';


const steps = ["Basic Details", 'Tell us about yourself', 'Verify'];

export default function HorizontalLinearStepper({ open, setOpen }) {
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleSkip = () => {
        setOpen(false)
        navigate('/')
    };

    const [json, setJson] = useState({
        "password": "",
        "name": "",
        "bio": "",
        "college": "",
        "country": "",
        "dob": "",
        "contact": "",
        "email": "",
        "gender": "",
        "who_to_date": "",
        "height": undefined,
        "interests": [],
        "is_drinker": false,
        "is_smoker": "",
        "is_verified": false,
    })

    console.log(json);
    const [imageUpload, setImageUpload] = useState(null);
    const [load, setLoad] = useState(false)
    const handleClick = () => { }
    const uploadFile = async () => {
        console.log("in upload file")
        setLoad(true)
        const data = new URLSearchParams();
        // data.append("input_file", imageUpload[0], imageUpload[0].name);
        console.log(imageUpload)
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name} + ${uuidv4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                data.append("url", url);
                console.log(imageUpload)
                await BarcodeService.scanID(data)
                    .then((res) => {
                        console.log(res.data)
                        const data = res.data.results[0].entities[0].objects[0].entities[0].text
                        const name = json.name.split(" ")
                        const college = json.college.split(" ")
                        const arr = [...name, ...college, json.contact]
                        const result = []
                        arr.map((word) => {
                            return result.push(data.toLowerCase().indexOf(word.toLowerCase()))
                        })
                        if (result.includes(-1)) {
                            axiosHandler('Verification Failed')
                        } else {
                            successHandler('Verification Successful')
                            setJson({ ...json, 'is_verified': true });
                            signup({ ...json, 'is_verified': true })
                        }
                        setLoad(false)
                    })
            });
        });
    };

    const signup = async (json) => {
        await AuthServices.signup(json)
            .then( (res) => {
                console.log(res.data.data.details);
                localStorage.setItem('lovelinkuser', JSON.stringify(res.data.data.details))
            })
            .catch((e) => {
                console.log(e)
                axiosHandler("e.message")
            })
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} sx={{ marginBottom: '5%' }}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                {
                    activeStep === 0 ? <SignUpForm setActiveStep={setActiveStep} activeStep={activeStep} json={json} setJson={setJson} /> : activeStep === 1 ? <SignUpForm1 setActiveStep={setActiveStep} activeStep={activeStep} json={json} setJson={setJson} /> : <SignUpForm2 setActiveStep={setActiveStep} activeStep={activeStep} json={json} setJson={setJson} imageUpload={imageUpload} setImageUpload={setImageUpload} />
                }
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {activeStep > 0 && activeStep < 2 && <Button onClick={() => setActiveStep(activeStep - 1)}>
                        Back
                    </Button>}

                    <Box sx={{ flex: '1 1 auto' }} />
                    {activeStep < 2 ? <Button sx={{ backgroundColor: "#E5659B" }} size="large" type="submit" variant="contained" onClick={() => setActiveStep(activeStep + 1)}>
                        Next
                    </Button> : ''}
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item>

                            {activeStep === 2 ? <Button sx={{ backgroundColor: "#E5659B" }} size="large" type="submit" variant="contained" onClick={() => uploadFile()}>
                                Verify
                            </Button> : ''}
                        </Grid>
                        <Grid item>

                            {activeStep === 2 ? <Button sx={{ backgroundColor: "#E5659B" }} size="large" type="submit" variant="contained" onClick={() => signup(json)}>
                                Skip
                            </Button> : ''}
                        </Grid>
                    </Grid>

                </Box>
            </>
        </Box>
    );
}
