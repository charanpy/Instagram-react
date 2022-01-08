import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotificationStart } from '../../redux-sagas/profile/profile.action';
import Notification from './Notification.page';
import { getIsCached } from '../../helpers/hooks/useLocalStorage';

const NotificationContainer = ({
  fetchNotificationStart: fetchNotification,
}) => {
  useEffect(() => {
    if (!getIsCached()?.notifications) fetchNotification();
  }, [fetchNotification]);
  return <Notification />;
};

NotificationContainer.propTypes = {
  fetchNotificationStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotificationStart: () => dispatch(fetchNotificationStart()),
});

export default connect(null, mapDispatchToProps)(NotificationContainer);
