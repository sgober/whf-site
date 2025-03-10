import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonBase, Grid, useMediaQuery } from '@mui/material';
import _ from 'lodash';
import { Lightbox } from 'yet-another-react-lightbox';

function Gallery({ classes }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.only('tablet'));
  const images = import.meta.glob('/public/gallery/*');
  const imageArray = Object.keys(images).map((image, index) => ({ src: image.replace('/public', ''), index }));
  const chunkSize = Math.ceil(_.divide(imageArray.length, isMobile ? 1 : isTablet ? 2 : 4));
  const imageGroups = _.chunk(imageArray, chunkSize);
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  return (
    <Box className={classes}>
      <Grid container columns={4} columnSpacing={1}>
        {imageGroups.map((imageGroup, gIndex) => (
          <Grid item key={gIndex} laptop={1} mobile={4} tablet={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {imageGroup.map((image, iIndex) => (
                <ButtonBase disableRipple key={iIndex} onClick={() => setSelectedImageIndex(image.index)}>
                  <img
                    src={image.src}
                    style={{ width: '100%', maxHeight: isMobile ? 450 : isTablet ? 400 : 300, objectFit: 'cover' }}
                  />
                </ButtonBase>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Lightbox
        close={setSelectedImageIndex}
        index={selectedImageIndex}
        open={!_.isNil(selectedImageIndex)}
        slides={imageArray}
      />
    </Box>
  );
}

Gallery.propTypes = {
  classes: PropTypes.string
};

export default Gallery;
