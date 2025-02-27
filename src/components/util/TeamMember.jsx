import { Box, Grid, Typography } from '@mui/material';

function TeamMember(props) {
  const { children, image, name, title } = props;

  return (
    <Grid container columns={12} columnSpacing={4} rowSpacing={2}>
      <Grid item xs={12} md={4} lg={3} sx={{ textAlign: 'center' }}>
        <img src={image} style={{ borderRadius: '50%', maxWidth: 300, width: '100%' }} />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Box>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="h6">{title}</Typography>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

export default TeamMember;
