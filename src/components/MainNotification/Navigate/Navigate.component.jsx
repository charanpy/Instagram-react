import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShowNotif } from '../Notification.style';

const Navigate = ({ notification }) => (
  <Link to='/me/notification'>
    <ShowNotif hasNotification={notification} className='fas fa-heart' />
  </Link>
);

Navigate.propTypes = {
  notification: PropTypes.bool.isRequired,
};

export default Navigate;
