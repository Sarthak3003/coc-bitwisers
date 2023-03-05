import { Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'

const AddBtn = {
    color: 'white', background: '#E5659B',
    fontFamily: 'Poppins', padding: '0px 2.6%'
}

function SignUpForm2({ setActiveStep, activeStep, json, setJson,imageUpload,setImageUpload }) {
    // const [imageUpload, setImageUpload] = useState(null);
    const [load, setLoad] = useState(false)
    const [disable, setDisable] = useState(true)
    const handleClick = () => { }
    
    return (
        <Grid container>
            <Grid item md={12}>
                <TextField
                    sx={{ width: '100%' }}
                    type="file"
                    onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                    }}
                />

            </Grid>
        </Grid>
    )
}

export default SignUpForm2