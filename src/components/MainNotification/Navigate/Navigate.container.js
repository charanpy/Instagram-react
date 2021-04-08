import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRealtimeNotification } from '../../../redux-sagas/profile/profile.selector';
import Navigate from './Navigate.component';

const NavigateContainer = ({ notification }) => {
  console.log('Noti');
  return <Navigate notification={notification} />;
};

NavigateContainer.propTypes = {
  notification: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notification: selectRealtimeNotification,
});

export default connect(mapStateToProps)(NavigateContainer);
