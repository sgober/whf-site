import _ from 'lodash';

/**
 * Checks if a value is any possible version of blank. Includes undefined,
 * null, empty string, empty array, and NaN.
 */
const isBlank = value => {
  return _.isNil(value) || value === '' || value?.length === 0 || _.isNaN(value);
};

/**
 * Checks if a value is valid and not empty
 */
const isValidAndNotEmpty = value => {
  return value && !isBlank(value);
};

export { isBlank, isValidAndNotEmpty };
