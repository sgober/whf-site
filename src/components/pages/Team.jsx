import { Box, Link, Typography } from '@mui/material';
import AbbyImage from 'assets/abby.jpg';
import CaseyImage from 'assets/casey.jpg';
import ErinImage from 'assets/erin.jpg';
import TeamMember from 'components/util/TeamMember';

function Team() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Typography sx={{ textAlign: 'center' }} variant="h1">
        Our Team
      </Typography>
      <TeamMember image={CaseyImage} name="Cassandra Smith" title="CEO">
        <Typography>
          Casey's bio here. Outside of her farm duties, Cassandra is a Mental Health Counselor with{' '}
          <Link href="https://walnuthillcounseling.com/" target="_blank">
            Walnut Hill Counseling
          </Link>
          .
        </Typography>
      </TeamMember>
      <TeamMember image={AbbyImage} name="Abigail Sullivan" title="CFO">
        <Typography> Abby's bio here</Typography>
      </TeamMember>
      <TeamMember image={ErinImage} name="Erin Shafer" title="Barn Manager">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </TeamMember>
    </Box>
  );
}

export default Team;
