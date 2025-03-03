import { Box, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import Logo from 'assets/logo.png';
import Form from 'components/util/Form';
import { sendEmail } from 'utils/email';

function Contact() {
  const formFields = [
    { id: 'name', label: 'Name', required: true },
    { id: 'email', label: 'Email', required: true, format: 'email' },
    { id: 'subject', label: 'Subject', required: true },
    { id: 'message', label: 'Message', required: true, multi: true }
  ];
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <img src={Logo} style={{ maxWidth: 500, width: '100%' }} />
      <Grid container columns={2} columnSpacing={1} rowSpacing={3}>
        <Grid
          item
          mobile={2}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, ...(isMobile && { textAlign: 'center' }) }}
          tablet={1}>
          <Typography variant="h1">Get in touch today!</Typography>
          <Typography>
            <Link
              href="https://www.google.com/maps/place/Walnut+Hill+Farm/@42.0099608,-71.3600764,17z/data=!3m1!4b1!4m6!3m5!1s0x89e46708c0557967:0x608d61f1e56a3996!8m2!3d42.0099608!4d-71.3575015!16s%2Fg%2F1tjbt5lj?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank">
              86 Walnut St, Plainville, MA 02762
            </Link>
          </Typography>
          <Typography>
            <Link href="mailto:walnuthillfarm2008@gmail.com">walnuthillfarm2008@gmail.com</Link>
          </Typography>
          {/* TODO: Add phone number */}
          <Typography>000 000-0000</Typography>
        </Grid>
        <Grid item mobile={2} tablet={1}>
          <Form formFields={formFields} onSubmit={(data, callback) => sendEmail({ ...data, callback })} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
