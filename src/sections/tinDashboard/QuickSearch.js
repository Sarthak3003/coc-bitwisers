import { Card, CardContent, Divider, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function QuickSearch() {
    const [search, setSearch] = useState('')
    return (
        <>
            <Grid container columnSpacing={3} sx={{ marginBottom: '2%' }}>
                <Grid item md={8}>
                    <Card sx={{ backgroundColor: '#E5659B', width: '100%', borderRadius: '20px' }} >
                        <CardContent>
                            <h3 style={{ fontFamily: 'Poppins', color: 'white' }} >Quick Search</h3>
                            <TextField
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} sx={{ backgroundColor: 'white', width: '100%', borderRadius: '5px' }} placeholder="Search who you're looking for" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={4} >
                    <Card sx={{ heigh: '100%' }}>
                        <CardContent>
                            <Grid container columnSpacing={3}>
                                <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <JoinInnerIcon sx={{ width: '68px', height: 'auto', color: '#E5659B' }} />
                                    <h3 style={{ fontFamily: 'Poppins', margin: '0', padding: 0 }} >24</h3>
                                    <p style={{ fontSize: '12px', margin: 0, padding: '0' }}>Matches</p>
                                </Grid>
                                <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <ThumbUpIcon sx={{ width: '60px', marginBottom: '1%', height: 'auto', color: '#E5659B' }} />
                                    <h3 style={{ fontFamily: 'Poppins', margin: '0', padding: 0 }} >234</h3>
                                    <p style={{ fontSize: '12px', margin: 0, padding: '0' }}>Likes</p>
                                </Grid>
                                <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <ThumbDownIcon sx={{ width: '60px', marginBottom: '1%', height: 'auto', color: '#E5659B' }} />
                                    <h3 style={{ fontFamily: 'Poppins', margin: '0', padding: 0 }} >124</h3>
                                    <p style={{ fontSize: '12px', margin: 0, padding: '0' }}>Dislikes</p>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default QuickSearch