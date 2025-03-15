import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import _ from 'lodash';
import PhotoGallery from 'components/util/PhotoGallery';

function Linus({ classes }) {
  const images = import.meta.glob(`/public/linus/*`);
  return (
    <Box className={classes} sx={{ maxWidth: 1200 }}>
      <Typography variant="h1" sx={{ textAlign: 'center', pb: 4 }}>
        Linus Fan Club
      </Typography>
      <PhotoGallery images={images} key="linus" />
    </Box>
  );
}

Linus.propTypes = {
  classes: PropTypes.string
};

export default Linus;
