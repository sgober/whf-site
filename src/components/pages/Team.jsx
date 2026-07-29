import PropTypes from 'prop-types';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router';
import CaseyImage from 'assets/images/team/casey.jpeg';
import ErinImage from 'assets/images/team/erin.jpeg';
import TeamMember from 'components/util/TeamMember';

function Team({ classes }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <Box className={classes} sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 3 : 5 }}>
      <Typography sx={{ textAlign: 'center' }} variant="h1">
        Our Team
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 5 : 8 }}>
        <TeamMember image={CaseyImage} name="Cassandra Smith" title="Head Trainer">
          <Typography>
            Cassandra, or “Casey,” got her start riding Morgans walking distance from Walnut Hill Farm’s current location.
            Forming a solid relationship with horses and putting their needs first has always been paramount for Casey, which
            led her to explore several different disciples. She brings a wide range of experience to her training, from the
            national Grand Prixs and international hunter derbies to liberty training and bridleless riding. With a strong
            focus on the basics, Casey enjoys starting young horses and bringing them through the early stages of their
            careers with patience. Casey believes that creating a strong foundation on the ground leads to success under
            saddle. Her approach focuses on building confidence and trust. Continuing to work with top trainers in a variety
            of disciplines, Casey constantly refines her methods to bring out the best in every horse and rider combination.
            Outside of the barn, Casey is a licensed mental health counselor and a jiu jitsu black belt.
          </Typography>
        </TeamMember>
        <TeamMember image={ErinImage} name="Erin Shafer" title="Barn Manager">
          <Typography>
            Originally from Madison, Connecticut, Erin graduated from Roger Williams University in 2020 which prompted her
            move to Bristol, Rhode Island where she managed a hunter/jumper farm. Erin loved caring for the horses and
            catering to their individual needs, peaking her interest in veterinary care. Erin worked as an equine technician
            assisting with routine appointments, emergencies and surgeries. Erin loved working with both hospital patients
            and quarantine mares which helped her find her home at Walnut Hill Farm with her horse{' '}
            <Link onClick={() => navigate('/linus')} sx={{ color: 'inherit', textDecoration: 'none' }}>
              Linus
            </Link>
            .
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
