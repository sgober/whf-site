import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Text from 'components/util/controls/Text';
import { sendEmail } from 'utils/email';
import { validateEmail } from 'utils/validate';

function Contact() {
  const [formData, setFormData] = useState({});

  const handleChange = (value, id) => {
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail({ ...formData, callback: () => setFormData({}) });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Text id="name" label="Name" onChange={handleChange} required={true} value={formData.name} />
      <Text
        id="email"
        label="Email"
        onChange={handleChange}
        required={true}
        validate={validateEmail}
        validationMessage="Must be a valid email."
        value={formData.email}
      />
      <Text id="message" label="Message" multi={true} onChange={handleChange} required={true} value={formData.message} />
      <Button disabled={!formData.name || !formData.email || !formData.message} type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default Contact;
