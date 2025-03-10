import PropTypes from 'prop-types';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

function TeamMember(props) {
  const { children, image, name, title } = props;
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <Grid container columns={12} columnSpacing={4} rowSpacing={2}>
      <Grid item laptop={4} mobile={12} tablet={5}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image}
            style={{
              borderRadius: '50%',
              maxWidth: isMobile ? 300 : 'unset',
              width: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Grid>
      <Grid item laptop={8} mobile={12} tablet={7}>
        <Box>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="h6">{title}</Typography>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

TeamMember.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
  name: PropTypes.string,
  title: PropTypes.string
};

export default TeamMember;
