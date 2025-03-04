import { Box, Typography } from '@mui/material';
import SocialLinks from 'components/util/SocialLinks';

function Footer() {
  return (
    // TODO: Change color
    <Box sx={{ backgroundColor: 'lightPink', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1 }}>
      <SocialLinks color="white" />
      <Typography variant="body2">© 2025 Walnut Hill Farm LLC. All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
