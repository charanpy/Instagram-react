import React from 'react';
import { Notify } from '../../helpers/helpers';
import DisplayFollow from './FollowNotification.component';

const Notification = ({ notification }) =>
  notification.type === 'Follow' && <DisplayFollow user={notification.user} />;

Notification.propTypes = {
  notification: Notify,
};

Notification.defaultProps = {
  notification: {},
};
export default Notification;
