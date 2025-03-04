import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

function Layout() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));
  return (
    <React.Fragment>
      <Header />
      <Box id="body" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
        <Box sx={{ flexGrow: 1, maxWidth: 1200, mx: 'auto', p: isMobile ? 4 : 6 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
      <ToastContainer closeOnClick draggable pauseOnHover pauseOnVisibilityChange autoClose={2000} position="bottom-left" />
    </React.Fragment>
  );
}

export default Layout;
