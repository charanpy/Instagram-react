import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import ProfilePicture from '../shared/ProfileImage/ProfileImage.component';
import { ProfilePropTypes } from '../../helpers/helpers';
import {
  NotificationContainer,
  NotificationText,
  Post,
  NavigateUser,
  Time,
} from './Notification.style';

const FollowNotification = ({ user, postId, image, createdAt }) => {
  console.log('follow notif');
  const time = formatDistance(new Date(createdAt).getTime(), new Date(), {
    addSuffix: true,
    includeSeconds: true,
  }).split(' ');
  const formattedTime =
    time.length > 3 ? time.slice(1).join(' ') : time.join(' ');
  return (
    <NotificationContainer>
      <NavigateUser to={`/${user.username}`}>
        <ProfilePicture
          chatProfile={user.photo?.secure_url || user.photo}
          height={4}
        />
        <NotificationText>
          {user.name}
          {' '}
          {postId ? 'liked your post' : 'started following you'}
        </NotificationText>
      </NavigateUser>
      {postId && (
        <Link to={`/post/${postId}`}>
          <Post src={image} alt='post' />
        </Link>
      )}
      <Time>{formattedTime}</Time>
    </NotificationContainer>
  );
};

FollowNotification.propTypes = {
  user: ProfilePropTypes,
  postId: PropTypes.string,
  image: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
};

FollowNotification.defaultProps = {
  user: {},
  postId: null,
  image: null,
};

export default FollowNotification;
