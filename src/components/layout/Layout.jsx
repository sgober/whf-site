import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

function Layout() {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
