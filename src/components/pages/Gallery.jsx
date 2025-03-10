import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonBase, Grid, useMediaQuery } from '@mui/material';
import _ from 'lodash';
import { Lightbox } from 'yet-another-react-lightbox';
import { chunk } from 'utils/chunk';

function Gallery({ classes }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.only('tablet'));
  const [imageArray, setImageArray] = useState([]);
  const [imageGroups, setImageGroups] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  useEffect(() => {
    const images = import.meta.glob('/public/gallery/*');
    const array = _.shuffle(Object.keys(images)).map((image, index) => ({ src: image.replace('/public', ''), index }));
    const groups = chunk(array, 4, isMobile ? 1 : isTablet ? 2 : 4);
    setImageArray(array);
    setImageGroups(groups);
  }, [isMobile, isTablet]);

  return (
    <Box className={classes} sx={{ maxWidth: 1200 }}>
      <Grid container columns={4} columnSpacing={1}>
        {imageGroups.map((group, gIndex) => (
          <Grid item key={gIndex} laptop={1} mobile={4} tablet={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {group.map((image, iIndex) => (
                <ButtonBase disableRipple key={iIndex} onClick={() => setSelectedImageIndex(image.index)}>
                  <img src={image.src} style={{ width: '100%', maxHeight: isMobile ? 450 : 350, objectFit: 'cover' }} />
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
