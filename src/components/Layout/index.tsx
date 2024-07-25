import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Images from '@/assets/Images';
import { primaryColor } from '@/constants';
import SiteNav from '@/components/Layout/components/SiteNav';
import ToasterWrapper from '@/components/basic/ToasterWrapper';
import Copyright from '@/components/Layout/components/Copyright';
import { AppBar, Drawer } from '@/components/Layout/styledComponents';
import MainListItems from '@/components/Layout/components/MainListItems';
import MobileListItems from '@/components/Layout/components/MobileListItems';

const defaultTheme = createTheme();

const Layout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      setOpen(false);
    }
  }, [isHomePage]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
              backgroundColor: 'var(--main-bg--color)',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                display: { xs: 'inline-flex', md: isHomePage ? 'none' : 'inline-flex' },
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Box component="img" alt="logo" sx={{ height: 34 }} src={Images.logo} />
            </Link>
            <SiteNav pathname={location.pathname} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{ display: { xs: 'flex', md: isHomePage ? 'none' : 'flex' } }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: [1],
              backgroundColor: `${primaryColor}30`,
            }}
          >
            <Box component="img" alt="sub logo" sx={{ height: 40 }} src={Images.taskDone} />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {!isHomePage && <MainListItems pathname={location.pathname} />}
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Divider sx={{ my: 1 }} />
              <MobileListItems pathname={location.pathname} />
            </Box>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container
            maxWidth={isHomePage ? false : 'lg'}
            sx={{
              mt: 4,
              mb: 4,
              height: 'calc(100% - 128px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              mx: isHomePage ? 0 : 'auto',
            }}
          >
            <Outlet />
            <Copyright sx={{ pt: 4 }} />
            <ToasterWrapper />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
