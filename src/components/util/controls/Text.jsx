import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, FormLabel, TextField } from '@mui/material';
import _ from 'lodash';

function Text(props) {
  const {
    controlProps,
    description,
    disabled,
    id,
    inputProps,
    label,
    multi,
    onChange,
    placeholder,
    required,
    validate,
    validationMessage,
    value
  } = props;
  const empty = required && !_.isUndefined(value) && !value;
  const [invalid, setInvalid] = useState(false);
  const error = empty || invalid;

  const onBlur = () => {
    if (_.isUndefined(value)) {
      onChange(null, id);
    }
    validate && setInvalid(!validate(value));
  };

  return (
    <FormControl fullWidth {...controlProps}>
      <FormLabel
        disabled={disabled}
        error={error}
        htmlFor={id}
        required={required}
        // sx={{ fontWeight: 'bold', pb: 0.25 }}
      >
        {label}
      </FormLabel>
      <TextField
        disabled={disabled}
        error={error}
        id={id}
        margin="none"
        minRows={multi ? 2 : null}
        multiline={multi}
        onBlur={onBlur}
        onChange={e => onChange(e.target.value, id)}
        placeholder={placeholder}
        required={required}
        value={value || ''}
        {...inputProps}
      />
      {description && <FormHelperText disabled={disabled}>{description}</FormHelperText>}
      {empty && <FormHelperText error>This field is required.</FormHelperText>}
      {invalid && <FormHelperText error>{validationMessage}</FormHelperText>}
    </FormControl>
  );
}

Text.propTypes = {
  controlProps: PropTypes.object,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  multi: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  validate: PropTypes.func,
  validationMessage: PropTypes.string,
  value: PropTypes.string
};

export default Text;
