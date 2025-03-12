import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import Facility4 from 'assets/images/facility/IMG_7398.jpg';
import Facility1Image from 'assets/images/facility.jpg';
import Facility2Image from 'assets/images/facility2.jpg';
import Team1 from 'assets/images/team/team1.jpg';
import PhotoLink from 'components/util/PhotoLink';

function Home({ classes }) {
  const slides = [{ src: Facility1Image }, { src: Facility2Image, styles: { objectPosition: '50% 70%' } }];
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <React.Fragment>
      <Slider arrows={false} autoplay={true} autoplaySpeed={5000} dots={true} infinite={true}>
        {slides.map((slide, index) => (
          <Box key={index}>
            <img
              src={slide.src}
              style={{ height: isMobile ? 250 : 600, width: '100%', objectFit: 'cover', ...slide.styles }}
            />
          </Box>
        ))}
      </Slider>
      <Box
        className={classes}
        sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 5 : 8, mt: isMobile ? 2 : 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography textAlign="center" variant="h1">
            Welcome to Walnut Hill Farm!
          </Typography>
          <Typography textAlign="center" variant="subtitle2">
            Set on 17 acres in Plainville, MA, Walnut Hill Farm is a leading boarding facility dedicated to providing
            exceptional care of the horses while helping clients to achieve their goals. WHF prioritizes each horse’s
            individual needs, offering tailored care plans that include multiple stabling and turnout options, specialized
            training, and expert management.
          </Typography>
        </Box>
        <Divider />
        <Grid container columns={2} columnSpacing={5} rowSpacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item laptop="auto" mobile={2} tablet={1}>
            <PhotoLink description="Learn more about the Walnut Hill team" image={Team1} link="/team" title="Our Team" />
          </Grid>
          <Grid item laptop="auto" mobile={2} tablet={1}>
            <PhotoLink
              description="Explore Walnut Hill Farm"
              image={Facility4}
              link="/facilities"
              title="Facilities & Services"
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.string
};

export default Home;
