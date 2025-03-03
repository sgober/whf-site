import { Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

function Footer() {
  return (
    // TODO: Change color
    <Box sx={{ backgroundColor: 'lightPink', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1 }}>
      <Box>
        <IconButton href="https://www.facebook.com/WHFplainville" sx={{ px: 0.5 }} target="_blank">
          <Facebook fontSize="large" />
        </IconButton>
        <IconButton href="https://www.instagram.com/walnuthillfarm2008/" sx={{ px: 0.5 }} target="_blank">
          <Instagram fontSize="large" />
        </IconButton>
      </Box>
      <Typography variant="body2">© 2025 by Walnut Hill Farm LLC. All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
