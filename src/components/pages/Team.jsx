import PropTypes from 'prop-types';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import CaseyImage from 'assets/images/casey.jpg';
import AbbyImage from 'assets/images/team/abby.jpeg';
import ErinImage from 'assets/images/team/erin.jpeg';
import TeamMember from 'components/util/TeamMember';

function Team({ classes }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <Box className={classes} sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 3 : 5 }}>
      <Typography sx={{ textAlign: 'center' }} variant="h1">
        Our Team
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 5 : 8 }}>
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
            Beginning her riding career with a focus on eventing, Abigail furthered her skills through young adulthood,
            expanding her knowledge of diverse training approaches and methodologies. With a strong emphasis on biomechanics,
            Abigail brings a unique skill set to her training and teaching of both horse and rider. Holding a Master’s degree
            in Occupational Therapy and having worked in the mental health field alongside her equestrian ventures, Abigail's
            expertise helps riders improve posture, balance, and alignment, while promoting comfort, safety, and a deeper
            connection with their horses.
          </Typography>
        </TeamMember>
        <TeamMember image={ErinImage} name="Erin Shafer" title="Barn Manager">
          <Typography>
            Originally from Madison, Connecticut, Erin graduated from Roger Williams University in 2020 which prompted her
            move to Bristol, Rhode Island where she managed a hunter/jumper farm. Erin loved caring for the horses and
            catering to their individual needs, peaking her interest in veterinary care. Erin worked as an equine technician
            assisting with routine appointments, emergencies and surgeries. Erin loved working with both hospital patients
            and quarantine mares which helped her find her home at Walnut Hill Farm with her horse Linus.
          </Typography>
        </TeamMember>
      </Box>
    </Box>
  );
}

Team.propTypes = {
  classes: PropTypes.string
};

export default Team;
