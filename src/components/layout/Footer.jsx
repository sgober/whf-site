import { Box, Typography } from '@mui/material';
import SocialLinks from 'components/util/SocialLinks';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1 }}>
      <SocialLinks color="light" />
      <Typography color="light" variant="body2">
        © 2025 Walnut Hill Farm LLC. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
