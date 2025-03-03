import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import Text from 'components/util/controls/Text';
import { ajv } from 'utils/ajv';
import { parseErrors } from 'utils/errors';
import { getSchema } from 'utils/schema';

function Form({ formFields, onSubmit }) {
  const [formData, setFormData] = useState({});
  const formSchema = getSchema(formFields);
  const validate = ajv.compile(formSchema);
  const valid = validate(formData);

  const handleChange = (value, id) => {
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData, () => setFormData({}));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {formFields.map(field => (
        <Text
          controlProps={{ sx: { pb: 3 } }}
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
      <Button fullWidth disabled={!valid} type="submit" variant="text">
        Submit
      </Button>
    </Box>
  );
}

Form.propTypes = {
  formFields: PropTypes.array,
  onSubmit: PropTypes.func
};

export default Form;
