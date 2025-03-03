import { Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

function SocialLinks() {
  return (
    <Box>
      <IconButton color="primary" href="https://www.facebook.com/WHFplainville" sx={{ px: 0.5 }} target="_blank">
        <Facebook fontSize="large" />
      </IconButton>
      <IconButton color="primary" href="https://www.instagram.com/walnuthillfarm2008/" sx={{ px: 0.5 }} target="_blank">
        <Instagram fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default SocialLinks;
