import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

function NewMembers() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant='h5' sx={{ fontFamily: 'Poppins' }}>New Members</Typography>
                    <Grid container columnSpacing={3}>
                        {[1, 2, 3, 4, 5, 6].map((k) => (
                            <Grid item md={2}>
                                <Card>
                                    <CardContent sx={{ padding: '0' }}>
                                        <div style={{ position: 'relative' }} >
                                            <CardMedia sx={{ width: '100%', height: '200px' }} component='img' image={`https://source.unsplash.com/random/?user-face&${k}`} />
                                            <Grid container sx={{ position: 'absolute', bottom: '8', marginTop: '-20%' }}>
                                                <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <FavoriteIcon sx={{ backgroundColor: '#E5659B', padding: '6%', borderRadius: '50%', color: 'white' }} />
                                                </Grid>
                                                <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <StarIcon sx={{ backgroundColor: '#E5659B', padding: '6%', borderRadius: '50%', color: 'white' }} />
                                                </Grid>
                                                <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <ModeCommentIcon sx={{ backgroundColor: '#E5659B', padding: '6%', borderRadius: '50%', color: 'white' }} />
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <h4 style={{ margin: '0', padding: '1%' }}>Khushi Mehta</h4>
                                        <p style={{ color: '#E5659B', margin: '0', padding: '1%', fontSize: '12px' }}>32 Years India</p>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default NewMembers