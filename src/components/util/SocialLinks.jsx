import PropTypes from 'prop-types';
import { Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

function SocialLinks({ color }) {
  return (
    <Box>
      <IconButton color={color} href="https://www.facebook.com/WHFplainville" sx={{ px: 0.5 }} target="_blank">
        <Facebook fontSize="large" />
      </IconButton>
      <IconButton color={color} href="https://www.instagram.com/walnuthillfarm2008/" sx={{ px: 0.5 }} target="_blank">
        <Instagram fontSize="large" />
      </IconButton>
    </Box>
  );
}

SocialLinks.propTypes = {
  color: PropTypes.string
};

export default SocialLinks;
