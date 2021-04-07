import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './Input.style';

const Input = React.forwardRef(
  ({ name, placeholder, type, minlength, defaultValue }, ref) => (
    <TextInput
      name={name}
      type={type}
      required='required'
      placeholder={placeholder}
      ref={ref}
      minLength={minlength}
      defaultValue={defaultValue}
    />
  )
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  minlength: PropTypes.number,
  defaultValue: PropTypes.string,
};

Input.defaultProps = {
  minlength: null,
  defaultValue: '',
};

export default Input;
