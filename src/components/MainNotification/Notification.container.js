import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectNotification } from '../../redux-sagas/profile/profile.selector';
import { Container } from './Notification.style';
import Notification from './Notification.component';
import { NoPost } from '../Post/Post.style';

/* eslint-disable */
const NotificationContainer = ({ notification }) => {
  console.log(notification);
  return (
    <Container>
      {notification.length ? (
        notification.map((notify) => (
          <Notification key={notify._id} notification={notify} />
        ))
      ) : (
        <NoPost>No Notifications</NoPost>
      )}
    </Container>
  );
};

NotificationContainer.defaultProps = {
  notification: [],
};
const mapStateToProps = createStructuredSelector({
  notification: selectNotification,
});

export default connect(mapStateToProps)(NotificationContainer);
