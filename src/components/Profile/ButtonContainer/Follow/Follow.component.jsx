import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button.style';

const Follow = ({ follow, hasfollowed }) => (
  <Button type='button' onClick={follow} bgcolor={hasfollowed}>
    {hasfollowed ? 'Following' : 'Follow'}
  </Button>
);

Follow.propTypes = {
  follow: PropTypes.func.isRequired,
  hasfollowed: PropTypes.bool.isRequired,
};

export default Follow;
