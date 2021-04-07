import React from 'react';
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Button from './Button.style';

const ButtonContainer = () => {
  console.log('');
  return (
    <Link to='/profile/edit'>
      <Button type='button'>Edit</Button>
    </Link>
  );
};

ButtonContainer.propTypes = {};

export default ButtonContainer;
