import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { editProfileStart } from '../../../redux-sagas/profile/profile.action';
import { selectEditProfile } from '../../../redux-sagas/profile/profile.selector';
import EditUserInfo from './EditUserInfo.component';
import { EditProfile } from '../../../helpers/helpers';

const EditUserInfoContainer = ({ profile, editProfileStart: editProfile }) => {
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const websiteRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const bio = bioRef?.current?.value;
    const website = websiteRef?.current?.value;
    if (!(name || bio || website)) {
      alert('Fields are empty');
      return false;
    }

    if (
      name === profile?.name &&
      bio === profile?.bio &&
      website === profile?.website
    ) {
      alert('Profile updated');
      return true;
    }
    const data = {
      name,
      bio,
      website,
    };
    console.log(data);
    editProfile(data);
    return true;
  };

  return (
    <EditUserInfo
      profile={profile}
      nameRef={nameRef}
      bioRef={bioRef}
      websiteRef={websiteRef}
      handleSubmit={handleSubmit}
    />
  );
};

EditUserInfoContainer.propTypes = {
  profile: EditProfile.isRequired,
  editProfileStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: selectEditProfile,
});

const mapDispatchToProps = (dispatch) => ({
  editProfileStart: (data) => dispatch(editProfileStart(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserInfoContainer);
