import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import Facility1Image from 'assets/images/facility.jpg';
import Facility2Image from 'assets/images/facility2.jpg';
import OurTeam from 'assets/images/our_team.png';
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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
              image={Facility2Image}
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
