import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack, CardMedia, Card, CardContent, Grid } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';
// mock
import account from '../../../_mock/account';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
//
import navConfig from './config';
import logo from "../../../images/logo.png"
import { kpupContext } from '../../../context';
// ----------------------------------------------------------------------

const NAV_WIDTH = 240;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { user, account } = useContext(kpupContext)
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navigate = useNavigate();

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ py: 3, display: 'inline-flex', justifyContent: 'center' }}>
        <CardMedia component='img' image={logo} sx={{ width: '50%' }} />
      </Box>

      <Box sx={{ mb: 2, mx: 2 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={'/assets/images/avatars/avatar_default.jpg'} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {user && user.name}
              </Typography>

            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />
      <Card sx={{ mb: 2, mx: 2 }}>
        <CardContent sx={{ padding: ' 10px' }} >
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <FlareIcon sx={{ color: '#E5659B' }} />
            <h4 style={{ margin: '0', padding: '0', fontFamily: 'Poppins', marginLeft: '3%' }}>VIP Members</h4>
          </Grid>
          {
            [{ id: '1', name: 'Sarthak Bhan', age:20 },
                        { id: '2', name: 'Prateek Rnaka', age:21 },
                        { id: '3', name: 'Bhavya Mehta', age:19 }].map((k) => {
              return <Grid container rowSpacing={1} sx={{ display: 'flex', padding: '2%', alignItems: 'center' }}>
                <Grid item md={5}>
                  <CardMedia sx={{ width: '50px', height: '50px', borderRadius: '5px' }} component='img' image={`https://source.unsplash.com/random/?user-face&${k.id}`} />

                </Grid>
                <Grid item md={7}>
                  <h6 style={{ margin: '0', padding: '0' }}>{k.name}</h6>
                  <p style={{ fontSize: '10px', margin: '0', padding: '0' }}>Age {k.age} Location: India</p>
                </Grid>
              </Grid>
            })
          }
        </CardContent>
      </Card>

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
