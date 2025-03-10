import PropTypes from 'prop-types';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import Form from 'components/util/Form';
import GoogleMaps from 'components/util/GoogleMaps';
import SocialLinks from 'components/util/SocialLinks';
import { sendEmail } from 'utils/email';

function Contact({ classes }) {
  const formFields = [
    { id: 'name', label: 'Name', required: true },
    { id: 'email', label: 'Email', required: true, format: 'email' },
    { id: 'subject', label: 'Subject', required: true },
    { id: 'message', label: 'Message', required: true, multi: true }
  ];
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('laptop'));

  const phone = '(508) 733-0691';
  const email = 'walnuthillfarm2008@gmail.com';
  const address = '86 Walnut St, Plainville, MA 02762';
  const directionsUrl =
    'https://www.google.com/maps/dir//Walnut+Hill+Farm,+86+Walnut+St,+Plainville,+MA+02762/@42.0099608,-71.3575015,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89e46708c0557967:0x608d61f1e56a3996!2m2!1d-71.3572221!2d42.0100958!3e0?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D';
  const locationUrl =
    'https://www.google.com/maps/place/Walnut+Hill+Farm/@42.0099608,-71.3600764,17z/data=!3m1!4b1!4m6!3m5!1s0x89e46708c0557967:0x608d61f1e56a3996!8m2!3d42.0099608!4d-71.3575015!16s%2Fg%2F1tjbt5lj?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D';

  const renderContactIcon = (Icon, label, url) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <IconButton color="primary" href={url} target="_blank">
        <Icon fontSize="large" />
      </IconButton>
      <Typography>{label}</Typography>
    </Box>
  );

  return (
    <Box className={classes} sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
      <Typography textAlign="center" variant="h1">
        Get in touch today
      </Typography>
      <Grid container columns={2} columnSpacing={2} rowSpacing={5}>
        <Grid item laptop={1} mobile={2} order={{ mobile: 2, laptop: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 3, py: 0.5 }}>
            <Typography textAlign="center" variant="subtitle1">
              We look forward to hearing from you!
            </Typography>
            {renderContactIcon(Phone, phone, `tel:${phone.replace(/\D/g, '')}`)}
            {renderContactIcon(Email, email, `mailto:${email}`)}
            {renderContactIcon(LocationOn, address, locationUrl)}
            {!isMobile && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SocialLinks color="primary" />
                <Typography>Stay in touch with us!</Typography>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item laptop={1} mobile={2} order={{ mobile: 1, laptop: 2 }}>
          <Form
            formFields={formFields}
            onSubmit={(data, callback) => sendEmail({ ...data, callback })}
            styles={{ maxWidth: 500, mx: 'auto' }}
          />
        </Grid>
      </Grid>
      <GoogleMaps
        address={address}
        directionsUrl={directionsUrl}
        locationUrl={locationUrl}
        position={{ lat: 42.0102557282786, lng: -71.35651444970946 }}
        title="Walnut Hill Farm"
        zoom={12}
      />
    </Box>
  );
}

Contact.propTypes = {
  classes: PropTypes.string
};

export default Contact;
