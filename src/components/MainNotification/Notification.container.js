import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectNotification } from '../../redux-sagas/profile/profile.selector';
import { Notify } from '../../helpers/helpers';
import { Container } from './Notification.style';
import Notification from './Notification.component';

const NotificationContainer = ({ notification }) => {
  console.log(notification);
  return (
    <Container>
      {notification.length &&
        notification.map((notify) => <Notification notification={notify} />)}
    </Container>
  );
};

NotificationContainer.propTypes = {
  notification: Notify,
};

NotificationContainer.defaultProps = {
  notification: [],
};
const mapStateToProps = createStructuredSelector({
  notification: selectNotification,
});

export default connect(mapStateToProps)(NotificationContainer);
