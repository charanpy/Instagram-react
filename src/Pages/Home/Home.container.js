import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { getPostStart } from '../../redux-sagas/profile/profile.action';
import { selectProfileId as selectUserId } from '../../redux-sagas/profile/profile.selector';
import Home from './Home.page';
import { SocketContext } from '../../context/socket';
import { getIsCached } from '../../helpers/hooks/useLocalStorage';

const HomeContainer = ({ userId, getPostStart: getPost }) => {
  const { socket } = useContext(SocketContext);
  console.log(11, socket);
  useEffect(() => {
    if (userId) {
      socket.emit('authenticated', userId);
      if (!getIsCached()?.posts) getPost();
    }
  }, [socket, userId, getPost]);
  return <Home />;
};

HomeContainer.propTypes = {
  userId: PropTypes.string,
  getPostStart: PropTypes.func.isRequired,
};

HomeContainer.defaultProps = {
  userId: null,
};

const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});

const mapDispatchToProps = (dispatch) => ({
  getPostStart: () => dispatch(getPostStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
