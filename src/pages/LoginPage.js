import { styled } from '@mui/material/styles';
import { Link, Container, Typography, CardMedia } from '@mui/material';
// hooks
import { useNavigate } from 'react-router-dom';
import useResponsive from '../hooks/useResponsive';
// sections
import { LoginForm } from '../sections/auth/login';
import search from '../images/search.png'
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
    const mdUp = useResponsive('up', 'md');
    const navigate = useNavigate()
    return (
        <>

            <StyledRoot>


                {mdUp && (
                    <StyledSection>
                        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                            Hi, Welcome Back
                        </Typography>
                        <CardMedia component='img' image='https://media.giphy.com/media/0q7ngLrQvNtQOervna/giphy.gif' alt="login"  />
                        {/* <div style={{width:'100%',height:0,paddingBottom:'70%',position:'relative'}}><iframe src="https://giphy.com/embed/0q7ngLrQvNtQOervna" title='gif' width="100%" height="100%" style={{position:"absolute"}} className="giphy-embed" allowFullScreen/></div><a href="https://giphy.com/stickers/winter-hndroz-hndroz7-0q7ngLrQvNtQOervna"></a> */}
                    </StyledSection>
                )}

                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            Sign in to K-PUP WMS
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 5 }}>
                            Don’t have an account? {''}
                            <Link sx={{ color: "#E5659B",cursor:'pointer' }} variant="subtitle2"  onClick={() => navigate('/signup')}>Get started</Link>
                        </Typography>
                        <LoginForm />
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}
