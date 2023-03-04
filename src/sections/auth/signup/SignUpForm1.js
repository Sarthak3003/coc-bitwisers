import React, { useState } from 'react'
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Stack } from '@mui/system';
import HeightIcon from '@mui/icons-material/Height';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            "&::-webkit-scrollbar": { display: 'none' }
        },
    },
};

function SignUpForm1({ setActiveStep, activeStep, json, setJson }) {
    const [showPassword, setShowPassword] = useState(false);
    const gender = { Male: 'M', Female: 'F', Other: 'O' }
    const pgender = { Male: 'M', Female: 'F', Any: 'A' }
    const smoke = { Often: 'O', Sometimes: 'S', Never: 'N' }
    const drink = { Often: 'O', Sometimes: 'S', Never: 'N' }


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setJson({ ...json, [name]: value });
    }

    const handleInterests = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setJson({ ...json, [name]: value.split(',') });
    }

    return (
        <>
            <Stack spacing={3}>
                <Grid container spacing={2}  >
                    <Grid item md={12} sx={{ width: '100%' }}>
                        <TextField name="bio" multiline rows={4} sx={{ width: '100%' }} fullWidth placeholder='Bio' value={json.bio} id='bio' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <TextField name="height"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            <HeightIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} sx={{ width: '100%' }} fullWidth placeholder='Height' value={json.height} id='height' onChange={handleChange} />
                    </Grid>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={json.gender}
                                name="gender"
                                sx={{ width: '100%' }}
                                onChange={handleChange}
                                MenuProps={MenuProps}
                            >

                                {
                                    Object.keys(gender).map((gen, index) => {
                                        return <MenuItem key={index} value={gender[gen]}>{gen}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Preffered Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={json.who_to_date}
                                name="who_to_date"
                                sx={{ width: '100%' }}
                                onChange={handleChange}
                                MenuProps={MenuProps}
                            >

                                {
                                    Object.keys(pgender).map((gen, index) => {
                                        return <MenuItem key={index} value={pgender[gen]}>{gen}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={12} sx={{ width: '100%' }}>
                        <TextField name="college" sx={{ width: '100%' }} fullWidth placeholder='College' value={json.college} id='college' onChange={handleChange} />
                    </Grid>
                    <Grid item md={6} sx={{ width: '100%' }}>
                        <TextField name="interests" sx={{ width: '100%' }} fullWidth placeholder='Interests' value={json.interests} id='interests' onChange={handleInterests} />
                    </Grid>
                    <Grid item md={3} sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Smoking</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={json.is_smoker}
                                name="is_smoker"
                                sx={{ width: '100%' }}
                                onChange={handleChange}
                                MenuProps={MenuProps}
                            >

                                {
                                    Object.keys(smoke).map((gen, index) => {
                                        return <MenuItem key={index} value={smoke[gen]}>{gen}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Drinking</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={json.is_drinker}
                                name="is_drinker"
                                sx={{ width: '100%' }}
                                onChange={handleChange}
                                MenuProps={MenuProps}
                            >

                                {
                                    Object.keys(drink).map((gen, index) => {
                                        return <MenuItem key={index} value={drink[gen]}>{gen}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default SignUpForm1