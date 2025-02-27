import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

function Layout() {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
        <Box sx={{ flexGrow: 1, maxWidth: 1200, mx: 'auto', p: 5 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
