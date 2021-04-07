import React from 'react';
import PropTypes from 'prop-types';
import Activity from './Activity.component';
import { ActivityContainer } from './UserActivity.style';

const UserActivity = ({ followers, following, post }) => {
  console.log('User act');
  return (
    <ActivityContainer>
      <Activity name='followers' count={followers} />
      <Activity name='following' count={following} />
      <Activity name='post' count={post} />
    </ActivityContainer>
  );
};

UserActivity.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  post: PropTypes.number.isRequired,
};

export default UserActivity;
