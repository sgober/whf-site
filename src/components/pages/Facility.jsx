import PropTypes from 'prop-types';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FacilityImage from 'assets/images/facility/facility3.jpg';

function Facility({ classes }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  const facilityList = [
    '200 x 80 indoor with GGT footing and full jump course',
    '200 x 220 outdoor ring with GGT footing and timed irrigation system',
    'Derby field with banks, stadium style jumps and a sunken road',
    'Two round pens with GGT footing',
    'Climate controlled indoor viewing area and tack room that has spacious tack lockers, tack cleaning station, and two indoor bathrooms',
    'Indoor wash stall with hot and cold water',
    'Two outdoor wash stalls/grooming areas',
    'Access to extensive trail system from the rear of the property',
    'Full time manager, barn support staff and two licensed and insured trainers to ensure proper daily care, overall wellness management and training programs that are comprehensive to meet desired goals for your riding and/or horse development!'
  ];

  const boardList = [
    '12’x12’ well bedded stall in an insulated barn with attached indoor arena',
    'Stalls cleaned and picked, as well as water buckets dumped, scrubbed and refilled daily',
    'Individual OR group turnout on grass paddocks with electric top rail—Available in half day, all day, all night or 24/7 options',
    'Blanket changes and application of fly masks, turnout boots and fly spray (owner provided) as necessary ',
    'Free choice high quality hay, provided in slow feed hay nets, if wanted, both inside and in turnout',
    'Up to 8 pounds of grain included daily, available in up to three separate feedings, including night check (please inquire for full list of grain options offered)',
    'Tack locker (with saddle rack, top shelf and 2+ bridle hooks)',
    'Storage garage access for your tack trunks, extra blankets, etc. ',
    'Trailer storage on flat stone dust surface included in board (limited spots available)'
  ];

  const servicesList = [
    'Full-service care',
    'Professional training services',
    'Lessons',
    'Veterinarian services',
    'Blacksmith services',
    'Horse sales and leasing services',
    'Access to horse shows (local one day and away shows)',
    'Access to monthly clinics with top professionals from a variety of diciplines',
    'Shipping services',
    'Access to a theraplate, magnawave, and cold laser'
  ];

  return (
    <Box className={classes} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography sx={{ textAlign: 'center' }} variant="h1">
        Facility & Services
      </Typography>
      <img src={FacilityImage} style={{ width: '100%', maxHeight: isMobile ? 300 : 500, objectFit: 'cover' }} />
      <Typography sx={{ textAlign: 'center', px: 2, fontWeight: 'bold' }} variant="subtitle2">
        Walnut Hill Farm is conveniently located in Plainville, MA and is easily accessible from Boston and Providence. Our
        facility includes 22 stalls, 23 paddocks, climate controlled tack room, 2 offices, an indoor wash stall, and an
        indoor viewing area. See below for a full list of our services and amenities.
      </Typography>
      <Box>
        <Typography variant="subtitle1">Facility and program offerings:</Typography>
        <Typography as="ul">
          {facilityList.map((listItem, index) => (
            <Typography as="li" key={index}>
              {listItem}
            </Typography>
          ))}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">Full board includes:</Typography>
        <Typography as="ul">
          {boardList.map((listItem, index) => (
            <Typography as="li" key={index}>
              {listItem}
            </Typography>
          ))}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">Our customers enjoy:</Typography>
        <Typography as="ul">
          {servicesList.map((listItem, index) => (
            <Typography as="li" key={index}>
              {listItem}
            </Typography>
          ))}
        </Typography>
      </Box>
      <Typography>
        Please <Link onClick={() => navigate('/contact')}>contact us</Link> for pricing or to learn more about the
        opportunities available at Walnut Hill Farm for boarding and training services.
      </Typography>
    </Box>
  );
}

Facility.propTypes = {
  classes: PropTypes.string
};

export default Facility;
