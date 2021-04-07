import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Profile from './Profile.page';
import { getProfileStart } from '../../redux-sagas/profile/profile.action';

const ProfileContainer = ({
  match: {
    params: { name },
  },
  getProfileStart: getProfile,
}) => {
  useEffect(() => {
    getProfile(name);
  }, [name, getProfile]);
  return <Profile />;
};

ProfileContainer.propTypes = {
  getProfileStart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getProfileStart: (name) => dispatch(getProfileStart(name)),
});

export default connect(null, mapDispatchToProps)(ProfileContainer);
