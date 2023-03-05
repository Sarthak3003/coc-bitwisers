import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Grid, CircularProgress, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import { Country, State, City } from 'country-state-city';
import successHandler from '../../../helpers/successHandler';
import errorHandler from "../../../helpers/errorHandler"
import AuthServices from '../../../services/AuthServices';
// components
import Iconify from '../../../components/iconify';
import UserServices from '../../../services/UserServices';
import { kpupContext } from '../../../context';


// ----------------------------------------------------------------------
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
export default function SignUpForm({ setActiveStep, activeStep, json, setJson }) {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const { token, setToken, user, setUser } = useContext(kpupContext)
  const countries = Country.getAllCountries()
  console.log(countries)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJson({ ...json, [name]: value });
  }
  console.log(json)

  const handleClick = async () => {
    setLoad(true)
    await AuthServices.signup(json)
      .then(async (res) => {
        console.log(res);
        localStorage.setItem("kpupToken", res.data)
        setToken(res.data)
        setLoad(false)
        await UserServices.getUserDetails(res.data)
          .then((res) => {
            setUser(res.data)
            localStorage.setItem("kpupUser", JSON.stringify(res.data))
            console.log(res.data)
            successHandler("Login Successful")
            navigate('/dashboard');
          })
      })
      .catch((e) => {
        console.log(e)
        errorHandler("e.message")
      })
  };

  return (
    <>
      <Stack spacing={3}>
        <Grid container spacing={2} >
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="name" label="Name" sx={{ width: '100%' }} value={json.name} id='name' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="email" label="Email address" sx={{ width: '100%' }} value={json.email} id='email' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="contact" label="Phone Number" sx={{ width: '100%' }} value={json.contact} id='contact' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="password" label="Password" sx={{ width: '100%' }} value={json.password} id='password' onChange={handleChange} />
          </Grid>
          <Grid item md={6} sx={{ width: '100%' }}>
            <TextField name="dob" label="Date of Birth" sx={{ width: '100%' }} value={json.dob} type='date' id='dob'  onChange={handleChange} />
          </Grid>
          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={json.country}
                name="country"
                sx={{ width: '100%' }}
                onChange={handleChange}
                MenuProps={MenuProps}
              >

                {
                  countries.map((country, index) => {
                    return <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>


      </Stack>



      {/* {!load ? <LoadingButton onClick={handleClick} sx={{ backgroundColor: "#E5659B" }} fullWidth size="large" type="submit" variant="contained">
        Sign Up
      </LoadingButton> : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress sx={{ backgroundColor: '#E5659B', color: 'white', padding: '5px', borderRadius: '50%' }} />
      </Box>} */}
    </>
  );
}
