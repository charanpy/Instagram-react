import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFollowing } from '../../../../redux-sagas/profile/profile.selector';
import { followStart } from '../../../../redux-sagas/profile/profile.action';
import Follow from './Follow.component';
import { SocketContext } from '../../../../context/socket';

const FollowContainer = ({
  followStart: follow,
  // eslint-disable-next-line
  following,
  _id,
  username,
  id,
}) => {
  console.log('follow');
  const [followAction, setFollowAction] = useState(null);
  const { socket } = useContext(SocketContext);
  const followUser = () => {
    if (!following[username]) {
      setFollowAction(true);
      follow(_id, username, socket, 'follow', id);
      return false;
    }
    setFollowAction(false);
    follow(_id, username, null, 'unfollow');
    return true;
  };
  return (
    <Follow
      follow={followUser}
      hasfollowed={followAction === null ? !!following[username] : followAction}
    />
  );
};

FollowContainer.propTypes = {
  followStart: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  following: selectFollowing,
});

const mapDispatchToProps = (dispatch) => ({
  followStart: (id, username, socket, follow, userId) =>
    dispatch(followStart(id, username, socket, follow, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowContainer);
