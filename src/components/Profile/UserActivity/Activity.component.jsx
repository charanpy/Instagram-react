import React from 'react';
import PropTypes from 'prop-types';
import { UserActivityWrap, Count, Description } from './UserActivity.style';

const Activity = ({ name, count }) => (
  <UserActivityWrap>
    <Count>{count}</Count>
    <Description>{name}</Description>
  </UserActivityWrap>
);

Activity.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Activity;
