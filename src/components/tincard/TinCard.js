import { Card, Grid, Typography, Box, Modal } from '@mui/material'
import React, { useState, useRef, useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarIcon from '@mui/icons-material/Star';
import TinModal from './TinModal';

const db = [
    {
        bio: 'Jaa be',
        gender: 'M',
        who_to_date: 'F',
        name: "Vinsmoke Sanji",
        email: "vsanji@gmail.com",
        age: 21,
        image:
            "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg",
        interests: ["Boxing", "Cricket", "Football"]
    },
    {

        bio: 'Jaa be',
        gender: 'M',
        who_to_date: 'F',
        name: "Roronoa Zoro",
        email: "rzoro@gmail.com",
        age: 22,
        image:
            "https://i.pinimg.com/564x/fc/d8/0c/fcd80c12ea7d13936c625f93cce57044.jpg",
        interests: ["Boxing", "Cricket", "Football"]
    },
    {

        bio: 'Jaa be',
        gender: 'M',
        who_to_date: 'F',
        name: "Monkey D. luffy",
        email: "mluffy@gmail.com",
        age: 19,
        image:
            "https://i.pinimg.com/564x/45/4e/a4/454ea4e4969afa2093c1f1de9ed278b9.jpg",
        interests: ["Boxing", "Cricket", "Football"]
    }

]

const TinCard = () => {
    const characters = db
    const [open, setOpen] = React.useState(false);
    const handleOpen = (char) => {
        setOpen(true)
        setChar(char)
    };
    const handleClose = () => setOpen(false);
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    const [char, setChar] = useState([])
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < db.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        console.log(direction)
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }



    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }
    return (
        <>
            <Grid Container sx={{ marginTop: '5%' }}>
                <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                    {characters.map((character) =>
                        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} >
                            <Box style={{ backgroundImage: `url(${character.image})`, cursor: "pointer" }} className='card'>
                                <h3>{character.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.75%', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '16px' }} className="Icons">
                                    <ReplayIcon
                                        sx={{
                                            color: "rgb(251, 187, 50)",
                                            fontSize: '1.5rem',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => goBack()}
                                    />
                                    <CloseIcon sx={{
                                        color: "rgb(254, 60, 114)",
                                        fontSize: "1.5rem",
                                        cursor: "pointer"
                                    }} onClick={() => swipe('left')} />
                                    <FlashOnIcon sx={{
                                        color: "rgb(130, 102, 179)",
                                        fontSize: "1.5rem",
                                        cursor: "pointer"
                                    }} onClick={() => { handleOpen(character) }} />
                                    <FavoriteIcon sx={{
                                        color: "rgb(28, 231, 199)",
                                        fontSize: "1.5rem",
                                        cursor: "pointer"
                                    }} onClick={() => swipe('right')} />

                                </div>
                            </Box>
                        </TinderCard>
                    )}
                </Grid>
            </Grid>

            <TinModal open={open} handleClose={handleClose} character={char} />
        </>
    )
}

export default TinCard