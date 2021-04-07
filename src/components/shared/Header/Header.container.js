import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectUsername } from '../../../redux-sagas/profile/profile.selector';
import { selectNotificationNumber } from '../../../redux-sagas/group/group.selector';
import Header from './Header.component';

const HeaderContainer = ({ notify, username }) => {
  console.log(notify);
  return <Header notify={notify} username={username} />;
};

HeaderContainer.propTypes = {
  notify: PropTypes.number.isRequired,
  username: PropTypes.string,
};

HeaderContainer.defaultProps = {
  username: '',
};

const mapStateToProps = createStructuredSelector({
  notify: selectNotificationNumber,
  username: selectUsername,
});

export default connect(mapStateToProps)(HeaderContainer);
