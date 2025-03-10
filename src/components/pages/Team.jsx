import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@mui/material';
import AbbyImage from 'assets/images/abby.jpg';
import CaseyImage from 'assets/images/casey.jpg';
import ErinImage from 'assets/images/team/erin.jpeg';
import TeamMember from 'components/util/TeamMember';

function Team({ classes }) {
  return (
    <Box className={classes} sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </TeamMember>
      <TeamMember image={ErinImage} name="Erin Shafer" title="Barn Manager">
        <Typography>
          Originally from Madison, Connecticut, Erin graduated from Roger Williams University in 2020 which prompted her move
          to Bristol, Rhode Island where she managed a hunter/jumper farm. Erin loved caring for the horses and catering to
          their individual needs, peaking her interest in veterinary care. Erin worked as an equine technician assisting with
          routine appointments, emergencies and surgeries. Erin loved working with both hospital patients and quarantine
          mares which helped her find her home at Walnut Hill Farm with her horse Linus.
        </Typography>
      </TeamMember>
    </Box>
  );
}

Team.propTypes = {
  classes: PropTypes.string
};

export default Team;
