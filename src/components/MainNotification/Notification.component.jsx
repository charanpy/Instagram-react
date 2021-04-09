import React from 'react';
import { Notify } from '../../helpers/helpers';
import DisplayFollow from './FollowNotification.component';

const Notification = ({ notification }) => (
  <DisplayFollow
    user={notification.user}
    postId={notification?.post?._id || null}
    image={notification?.post?.image[0]?.url || null}
    createdAt={notification.createdAt}
  />
);

Notification.propTypes = {
  notification: Notify,
};

Notification.defaultProps = {
  notification: {},
};
export default Notification;
