import { Card, CardContent, CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function RecentActivities() {
    return (
        <>
            <Card sx={{ marginTop: '2%' }}>
                <CardContent>
                    <h3 style={{ fontFamily: 'Poppins', margin: '0', padding: '0' }} >Recent Activities</h3>

                    {
                        [{ id: '1', name: 'Kush Maniar', activity: 'Just viewed your profile', color: '#FF008A' },
                        { id: '2', name: 'Prateek Rnaka', activity: 'Asked a question', color: 'blue' },
                        { id: '3', name: 'Vidhita Pai', activity: 'You Liked then', color: 'yellow' },
                        { id: '4', name: 'Lokita Varma', activity: 'Just viewed your profile', color: '#FF008A' },
                        { id: '5', name: 'Khushi Mehta', activity: 'Just viewed your profile', color: '#FF008A' }].map((k) => {
                            return <Card>
                                <CardContent sx={{ padding: '10px', display: 'flex' }} >
                                    <CardMedia sx={{ width: '50px', borderRadius: '5px', height: '50px' }} component='img' image={`https://source.unsplash.com/random/?user-face&${k.id}`} />
                                    <div style={{ marginLeft: '2%' }}>
                                        <h3 style={{ margin: '0', padding: 0 }}>{k.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '3' }}>
                                            <Box sx={{ width: '5px', height: '5px', backgroundColor: `${k.color}`, borderRadius: '50%' }} />
                                            <p style={{ margin: '0', marginLeft: '2%', fontSize: '12px', padding: 0 }}>{k.activity}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        })
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default RecentActivities