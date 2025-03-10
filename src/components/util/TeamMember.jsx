import PropTypes from 'prop-types';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

function TeamMember(props) {
  const { children, image, name, title } = props;
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <Grid container columns={12} columnSpacing={4} rowSpacing={2}>
      <Grid item laptop={3} mobile={12} tablet={4}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image}
            style={{
              borderRadius: '50%',
              maxWidth: isMobile ? 250 : 300,
              width: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Grid>
      <Grid item laptop={9} mobile={12} tablet={8}>
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
