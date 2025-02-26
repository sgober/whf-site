import { Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

function Footer() {
  return (
    // TODO: Change color
    <Box sx={{ backgroundColor: 'lightPink', display: 'flex', justifyContent: 'center', p: 1 }}>
      <IconButton href="https://www.facebook.com/WHFplainville" target="_blank">
        <Facebook fontSize="large" />
      </IconButton>
      <IconButton href="https://www.instagram.com/walnuthillfarm2008/" target="_blank">
        <Instagram fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default Footer;
