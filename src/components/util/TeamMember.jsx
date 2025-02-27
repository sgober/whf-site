import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function TeamMember(props) {
  const { children, image, name, title } = props;

  return (
    <Grid container columns={12} columnSpacing={4} rowSpacing={2}>
      <Grid item lg={3} md={4} sx={{ textAlign: 'center' }} xs={12}>
        <img src={image} style={{ borderRadius: '50%', maxWidth: 300, width: '100%' }} />
      </Grid>
      <Grid item lg={9} md={8} xs={12}>
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
