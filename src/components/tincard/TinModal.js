import React from 'react'
import { Modal, Box, Typography, CardMedia, Card, CardContent } from '@mui/material';


const TinModal = ({ open, handleClose, character }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '13px'
    };
    console.log(character)
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Card>
                    <CardMedia
                        sx={{ height: '100' }}
                        component='img'
                        image={character.image} />
                    <CardContent>
                        <Typography>Name: {character.name}</Typography>
                        <Typography>Bio: {character.bio}</Typography>
                        <Typography>Gender: {character.gender === 'M' ? 'Male' : 'Female'}</Typography>
                        <Typography>Interested in: {character.who_to_date === 'M' ? 'Male' : 'Female'}</Typography>
                        <Typography>Hobbies:
                            <ul>{character.interests?.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>
                        </Typography>

                    </CardContent>
                </Card>
            </Box>
        </Modal>
    )
}

export default TinModal