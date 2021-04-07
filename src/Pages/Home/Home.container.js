import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectProfileId as selectUserId } from '../../redux-sagas/profile/profile.selector';
import Home from './Home.page';
import { SocketContext } from '../../context/socket';

const HomeContainer = ({ userId }) => {
  const { socket } = useContext(SocketContext);
  console.log(11, socket);
  useEffect(() => {
    if (userId) {
      socket.emit('authenticated', userId);
    }
  }, [socket, userId]);
  return <Home />;
};

HomeContainer.propTypes = {
  userId: PropTypes.string,
};

HomeContainer.defaultProps = {
  userId: null,
};

const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});

export default connect(mapStateToProps)(HomeContainer);
