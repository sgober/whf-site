import { isBlank } from 'utils/blank';

const validateEmail = email => {
  return isBlank(email) || /\S+@\S+\.\S+/.test(email);
};

export { validateEmail };
