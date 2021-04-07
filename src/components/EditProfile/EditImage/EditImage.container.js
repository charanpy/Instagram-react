import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserPhoto } from '../../../redux-sagas/profile/profile.selector';
import { uploadImageStart } from '../../../redux-sagas/profile/profile.action';
import EditImageComponent from './EditImage.component';
import { Photo } from '../../../helpers/helpers';

const EditImageContainer = ({ photo, uploadImageStart: uploadImage }) => {
  const changeProfileImage = (data) => {
    const requestMethod = photo.includes('cdninsta') ? 'post' : 'put';
    uploadImage(data, requestMethod);
  };
  return (
    <EditImageComponent photo={photo} changeProfileImage={changeProfileImage} />
  );
};

EditImageContainer.propTypes = {
  photo: Photo.isRequired,
  uploadImageStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  photo: selectUserPhoto,
});

const mapDispatchToProps = (dispatch) => ({
  uploadImageStart: (data, type) => dispatch(uploadImageStart(data, type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditImageContainer);
