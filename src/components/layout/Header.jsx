import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        {/* TODO: change to logo */}
        {/* TODO: add mobile support */}
        <Typography sx={{ flexGrow: 1 }}>Walnut Hill Farm</Typography>
        <Tabs onChange={(e, newValue) => navigate(`/${newValue}`)} value={location.pathname.replace('/', '')}>
          <Tab label="Home" value="" />
          <Tab label="Our Team" value="team" />
          <Tab label="Facilities" value="facilities" />
          <Tab label="Calendar" value="calendar" />
          <Tab label="Gallery" value="gallery" />
          <Tab label="Contact" value="contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
