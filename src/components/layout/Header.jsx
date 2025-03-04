import React, { useState } from 'react';
import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from 'assets/logo.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  const tabs = [
    { label: 'Home', value: '/' },
    { label: 'Our Team', value: '/team' },
    { label: 'Facilities', value: '/facilities' },
    { label: 'Calendar', value: '/calendar' },
    { label: 'Gallery', value: '/gallery' },
    { label: 'Contact Us', value: '/contact' }
  ];

  const handleNavigation = page => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar color="secondary" component="nav" position="sticky">
        <Toolbar sx={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', justifyContent: 'space-between' }}>
          {/* TODO: UPDATE WITH LOGO */}
          <img src={Logo} style={{ maxHeight: 75 }} />
          {isMobile ? (
            <IconButton
              aria-label="menu"
              color="inherit"
              edge="start"
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{ mr: -1.5 }}>
              <Menu />
            </IconButton>
          ) : (
            // TODO: UPDATE ACTIVE STYLING
            <Tabs onChange={(e, newValue) => navigate(newValue)} value={location.pathname}>
              {tabs.map((tab, index) => (
                <Tab key={index} label={tab.label} sx={{ fontSize: 16 }} value={tab.value} />
              ))}
            </Tabs>
          )}
        </Toolbar>
        <Collapse in={menuOpen} orientation="vertical">
          <Box sx={{ backgroundColor: 'white', color: 'text.primary' }}>
            {/* TODO: UPDATE THIS STYLING */}
            <List dense sx={{ py: 0 }}>
              {tabs.map((tab, index) => (
                <React.Fragment key={index}>
                  <ListItem button onClick={() => handleNavigation(tab.value)}>
                    <ListItemText primary={tab.label} />
                  </ListItem>
                  {index !== tabs.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Collapse>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
