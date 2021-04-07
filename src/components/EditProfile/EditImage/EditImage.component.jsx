import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../../shared/ProfileImage/ProfileImage.component';
import UseModal from '../../shared/Modal/Modal.state';
import Editor from '../../shared/ImageEditor/Editor.container';
import { Photo } from '../../../helpers/helpers';
import { ChangeProfileImage } from '../Edit.style';

const EditImage = ({ photo, changeProfileImage }) => {
  console.log('EditImage');
  const [modal, toggleModal] = UseModal();
  return (
    <>
      <ProfileImage chatProfile={photo} height={10} />
      <ChangeProfileImage onClick={toggleModal}>Edit Image</ChangeProfileImage>
      <Editor modal={modal} toggleModal={toggleModal} uploadImage={changeProfileImage} />
    </>
  );
};

EditImage.propTypes = {
  photo: Photo.isRequired,
  changeProfileImage: PropTypes.func.isRequired
};

export default EditImage;
