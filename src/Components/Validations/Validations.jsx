export const validateFields = fields => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!fields.name) {
    errors.name = 'Name is required';
  }
  if (!fields.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(fields.email)) {
    errors.email = 'Email is not valid';
  }
  if (!fields.phone) {
    errors.phone = 'Phone is required';
  }
  if (!fields.password) {
    errors.password = 'Password is required';
  } else if (!passwordRegex.test(fields.password)) {
    errors.password =
      'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character';
  }
  if (!fields.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (fields.password !== fields.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const validateFieldsLogin = (email, password) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Email is not valid';
  }

  if (!password.trim()) {
    errors.password = 'Password is required';
  } else if (!passwordRegex.test(password)) {
    errors.password =
      'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character';
  }

  return errors;
};
