import { Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { LoadingButton } from '@mui/lab';
import axiosHandler from '../../../helpers/errorHandler';
import { storage } from '../../../firebase/config';
import BarcodeService from '../../../services/BarcodeService';
import successHandler from '../../../helpers/successHandler';

const AddBtn = {
    color: 'white', background: '#E5659B',
    fontFamily: 'Poppins', padding: '0px 2.6%'
}

function SignUpForm2({ setActiveStep, activeStep, json, setJson }) {
    const [imageUpload, setImageUpload] = useState(null);
    const [load, setLoad] = useState(false)
    const [disable, setDisable] = useState(true)
    const handleClick = () => { }
    const uploadFile = async () => {

        setLoad(true)
        const data = new URLSearchParams();
        // data.append("input_file", imageUpload[0], imageUpload[0].name);
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
                        }
                        setLoad(false)
                    })
            });
        });
    };
    return (
        <Grid container>
            <Grid item md={10}>
                <TextField
                    sx={{ width: '100%' }}
                    type="file"
                    onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                    }}
                />

            </Grid>
            <Button style={AddBtn} onClick={uploadFile}> Upload</Button>
            {!load ? <LoadingButton onClick={handleClick} sx={{ backgroundColor: "#E5659B" }} fullWidth size="large" type="submit" variant="contained">
                Sign Up
            </LoadingButton> : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress sx={{ backgroundColor: '#E5659B', color: 'white', padding: '5px', borderRadius: '50%' }} />
            </Box>}
        </Grid>
    )
}

export default SignUpForm2