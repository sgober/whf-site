import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Box id="body" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto', width: '100%' }}>
        <Box sx={{ alignSelf: 'center', flexGrow: 1, width: '100%' }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
}

export default Layout;
