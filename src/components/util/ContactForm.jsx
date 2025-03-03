import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Text from 'components/util/controls/Text';
import { ajv } from 'utils/ajv';
import { sendEmail } from 'utils/email';
import { parseErrors } from 'utils/errors';
import { getSchema } from 'utils/schema';

function ContactForm() {
  const [formData, setFormData] = useState({});
  const formFields = [
    { id: 'name', label: 'Name', required: true },
    { id: 'email', label: 'Email', required: true, format: 'email' },
    { id: 'message', label: 'Message', required: true, multi: true }
  ];
  const formSchema = getSchema(formFields);

  const validate = ajv.compile(formSchema);
  const valid = validate(formData);

  const handleChange = (value, id) => {
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail({ ...formData, callback: () => setFormData({}) });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {formFields.map(field => (
        <Text
          errors={parseErrors(validate.errors, field.id, formSchema)}
          id={field.id}
          key={field.id}
          label={field.label}
          multi={field.multi}
          onChange={handleChange}
          required={formSchema.required.includes(field.id)}
          value={formData[field.id]}
        />
      ))}
      <Button disabled={!valid} type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default ContactForm;
