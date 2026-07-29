import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

function Layout() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <React.Fragment>
      <Header />
      <Box id="body" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: isMobile ? 'unset' : 'auto' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
}

export default Layout;
