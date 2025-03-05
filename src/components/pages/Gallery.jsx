import { Grid, useMediaQuery } from '@mui/material';
import _ from 'lodash';

function PhotoGallery() {
  const columns = 4;
  const columnsByBreakpoint = { mobile: 4, tablet: 2, laptop: 1, desktop: 1 };
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.only('tablet'));
  const images = import.meta.glob('/src/assets/images/gallery/*');
  const chunkSize = Math.ceil(_.divide(Object.keys(images).length, isMobile ? 1 : isTablet ? 2 : 4));
  const imageGroups = _.chunk(Object.keys(images), chunkSize);

  return (
    <Grid container columns={columns} columnSpacing={1} rowSpacing={0.5}>
      {imageGroups.map((imageGroup, gIndex) => (
        <Grid item key={gIndex} {...columnsByBreakpoint}>
          {imageGroup.map((image, iIndex) => (
            <img key={iIndex} src={image} style={{ width: '100%' }} />
          ))}
        </Grid>
      ))}
    </Grid>
  );
}

export default PhotoGallery;
