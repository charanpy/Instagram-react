import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../shared/ProfileImage/ProfileImage.component';
import { ProfilePropTypes } from '../../helpers/helpers';
import { NotificationContainer, NotificationText } from './Notification.style';

const FollowNotification = ({ user }) => {
  console.log('follow notif');
  return (
    <Link to={`/${user.username}`}>
      <NotificationContainer>
        <ProfilePicture chatProfile={user.photo} height={4} />
        <NotificationText>
          {user.name}
          {' '}
          started followeing you
        </NotificationText>
      </NotificationContainer>
    </Link>
  );
};

FollowNotification.propTypes = {
  user: ProfilePropTypes,
};

FollowNotification.defaultProps = {
  user: {},
};

export default FollowNotification;
