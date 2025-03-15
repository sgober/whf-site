import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import _ from 'lodash';
import PhotoGallery from 'components/util/PhotoGallery';

function Gallery({ classes }) {
  const images = import.meta.glob(`/public/gallery/*`);
  return (
    <Box className={classes} sx={{ maxWidth: 1200 }}>
      <PhotoGallery images={images} key="gallery" />
    </Box>
  );
}

Gallery.propTypes = {
  classes: PropTypes.string
};

export default Gallery;
