import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';

function TeamMember(props) {
  const { children, image, name, title } = props;

  return (
    <Grid container columns={12} columnSpacing={4} rowSpacing={2}>
      <Grid item laptop={3} mobile={12} tablet={4}>
        <img src={image} style={{ borderRadius: '50%', maxWidth: 300, width: '100%' }} />
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
  image: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string
};

export default TeamMember;
