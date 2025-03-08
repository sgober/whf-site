import React, { useState } from 'react';
import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  ButtonBase,
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
import Logo from 'assets/images/logo.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.only('tablet'));

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
      <AppBar color="secondary" component="header" position="sticky">
        <Toolbar sx={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', justifyContent: 'space-between' }}>
          {/* TODO: UPDATE LOGO */}
          <ButtonBase disableRipple onClick={() => navigate('/')}>
            <img src={Logo} style={{ maxHeight: 75 }} />
          </ButtonBase>
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
            <Tabs onChange={(e, newValue) => navigate(newValue)} value={location.pathname}>
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  sx={{ fontSize: isTablet ? 14 : 16, px: isTablet ? 1 : 2 }}
                  value={tab.value}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
        <Collapse in={menuOpen} orientation="vertical">
          <Box sx={{ backgroundColor: 'white', color: 'text.primary' }}>
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
