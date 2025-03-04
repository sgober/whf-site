import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Box id="body" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
        <Box sx={{ flexGrow: 1, maxWidth: 1200, mx: 'auto', p: 5 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
      <ToastContainer closeOnClick draggable pauseOnHover pauseOnVisibilityChange autoClose={2000} position="bottom-left" />
    </React.Fragment>
  );
}

export default Layout;
