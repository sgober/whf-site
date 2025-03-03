import PropTypes from 'prop-types';
import { FormControl, FormHelperText, FormLabel, TextField } from '@mui/material';
import _ from 'lodash';

function Text(props) {
  const {
    controlProps,
    description,
    disabled,
    errors,
    id,
    inputProps,
    label,
    multi,
    onChange,
    placeholder,
    required,
    value
  } = props;
  const error = !_.isUndefined(value) && errors?.length > 0;
  const errorMessage = errors?.join('. ');

  return (
    <FormControl fullWidth {...controlProps}>
      <FormLabel disabled={disabled} error={error} htmlFor={id} required={required}>
        {label}
      </FormLabel>
      <TextField
        disabled={disabled}
        error={error}
        id={id}
        margin="none"
        minRows={multi ? 2 : null}
        multiline={multi}
        onBlur={() => _.isUndefined(value) && onChange(null, id)}
        onChange={e => onChange(e.target.value, id)}
        placeholder={placeholder}
        required={required}
        value={value || ''}
        {...inputProps}
      />
      {description && <FormHelperText disabled={disabled}>{description}</FormHelperText>}
      {error && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

Text.propTypes = {
  controlProps: PropTypes.object,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  multi: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string
};

export default Text;
