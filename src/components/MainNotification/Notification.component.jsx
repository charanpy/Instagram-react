import React from 'react';
import DisplayFollow from './FollowNotification.component';

/* eslint-disable */

const Notification = ({ notification }) => (
  <DisplayFollow
    user={notification.user}
    postId={notification?.post?._id || null}
    image={notification?.post?.image[0]?.url || null}
    createdAt={notification.createdAt}
  />
);

Notification.defaultProps = {
  notification: {},
};
export default Notification;
