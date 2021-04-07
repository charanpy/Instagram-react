import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Profile from './Profile.component';
import {
  selectCurrentProfile,
  selectProfileId,
} from '../../redux-sagas/profile/profile.selector';
import { UserProfilePropTypes } from '../../helpers/helpers';

const ProfileContainer = ({ profile, id }) => {
  console.log('Profile', profile);
  return profile && <Profile profile={profile} id={id} />;
};

ProfileContainer.propTypes = {
  profile: UserProfilePropTypes,
  id: PropTypes.string.isRequired,
};

ProfileContainer.defaultProps = {
  profile: null,
};

const mapStateToProps = createStructuredSelector({
  profile: selectCurrentProfile,
  id: selectProfileId,
});

export default connect(mapStateToProps)(ProfileContainer);
