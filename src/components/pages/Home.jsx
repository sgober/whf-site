import { Box, Divider, Grid, Typography } from '@mui/material';
import Facility from 'assets/images/facility2.jpg';
import OurTeam from 'assets/images/our_team.png';
import PhotoLink from 'components/util/PhotoLink';

function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      TODO: photo carousel here
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography textAlign="center" variant="h1">
          Welcome to Walnut Hill Farm!
        </Typography>
        <Typography textAlign="center" variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </Box>
      <Divider />
      <Grid container columns={2} columnSpacing={5} rowSpacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item laptop="auto" mobile={2} tablet={1}>
          <PhotoLink description="Learn more about the Walnut Hill team" image={OurTeam} link="/team" title="Our Team" />
        </Grid>
        <Grid item laptop="auto" mobile={2} tablet={1}>
          <PhotoLink
            description="Explore Walnut Hill Farm"
            image={Facility}
            link="/facilities"
            title="Facilities & Services"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
