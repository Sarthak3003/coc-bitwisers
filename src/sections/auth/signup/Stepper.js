import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { LoadingButton } from '@mui/lab';
import { CircularProgress } from '@mui/material';
import SignUpForm from './SignUpForm';
import SignUpForm1 from './SignUpForm1';
import SignUpForm2 from './SignUpForm2';

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
        "is_verified": "",
        "age": '',
    })

    console.log(json);
    const [load, setLoad] = useState(false)

    const handleClick = () => { }

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
                    activeStep === 0 ? <SignUpForm setActiveStep={setActiveStep} activeStep={activeStep} json={json} setJson={setJson} /> : activeStep === 1 ? <SignUpForm1 setActiveStep={setActiveStep} activeStep={activeStep} json={json} setJson={setJson} /> : <SignUpForm2 setActiveStep={setActiveStep} activeStep={activeStep} json={json} setJson={setJson} />
                }
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {activeStep > 0 && <Button onClick={() => setActiveStep(activeStep - 1)}>
                        Back
                    </Button>}

                    <Box sx={{ flex: '1 1 auto' }} />
                    {activeStep < 2 ? <Button sx={{ backgroundColor: "#E5659B" }} size="large" type="submit" variant="contained" onClick={() => setActiveStep(activeStep + 1)}>
                        Next
                    </Button> : ''}

                </Box>
            </>
        </Box>
    );
}
