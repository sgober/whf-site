import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonBase, Grid } from '@mui/material';
import _ from 'lodash';
import { Lightbox } from 'yet-another-react-lightbox';
import useBreakpoint from 'utils/breakpoint';
import { chunk } from 'utils/chunk';

function Gallery({ classes }) {
  const breakpoint = useBreakpoint();
  const columns = useMemo(() => ({ mobile: 12, tablet: 6, laptop: 4, desktop: 3 }), []);
  const [imageArray, setImageArray] = useState([]);
  const [imageGroups, setImageGroups] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  useEffect(() => {
    const images = import.meta.glob('/public/gallery/*');
    const array = _.shuffle(Object.keys(images)).map((image, index) => ({ src: image.replace('/public', ''), index }));
    setImageArray(array);
  }, []);

  useEffect(() => {
    setImageGroups(chunk(imageArray, 12 / columns[breakpoint], true));
  }, [imageArray, breakpoint, columns]);

  return (
    <Box className={classes} sx={{ maxWidth: 1200 }}>
      <Grid container columns={12} columnSpacing={1}>
        {imageGroups.map((group, gIndex) => (
          <Grid item key={gIndex} {...columns}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {group.map((image, iIndex) => (
                <ButtonBase disableRipple key={iIndex} onClick={() => setSelectedImageIndex(image.index)}>
                  <img
                    src={image.src}
                    style={{ aspectRatio: breakpoint === 'mobile' ? 'unset' : '1 / 1', objectFit: 'cover', width: '100%' }}
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
