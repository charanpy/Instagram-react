import React, { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal.component';
import Button from '../Button/Button.component';
import Icon from '../Icon/Icon.component';
import { ButtonContainer, ButtonWrap } from './Editor.style';

const Editor = ({
  modal,
  toggleModal,
  handleFile,
  image,
  croppedImage,
  reselectImage,
  handleCropImage,
  uploadPhoto,
}) => {
  console.log('Editor');
  const editor = useRef();
  return (
    <Modal visible={modal}>
      {!(image || croppedImage) && (
        <label htmlFor='image'>
          <Icon className='fas fa-paperclip' />
          {/* <Button text='SELECT IMAGE' type='button' handleSubmit={() => {}} /> */}
          <input
            type='file'
            id='image'
            accept='image/*'
            onChange={handleFile}
          />
        </label>
      )}
      {image && !croppedImage && (
        <AvatarEditor
          ref={editor}
          image={image}
          width={200}
          height={200}
          scale={1.5}
        />
      )}
      {croppedImage && <img src={croppedImage} alt='post' width={200} />}
      <ButtonContainer>
        <ButtonWrap>
          <Button
            width={10}
            type='button'
            text='CLOSE'
            danger
            handleSubmit={toggleModal}
          />
        </ButtonWrap>
        {(image || croppedImage) && (
          <ButtonWrap>
            <Button
              width={10}
              type='button'
              text='RESET'
              danger
              handleSubmit={reselectImage}
            />
          </ButtonWrap>
        )}
        {image && !croppedImage && (
          <Button
            width={10}
            type='button'
            text='CROP'
            handleSubmit={() => handleCropImage(editor)}
          />
        )}
        {croppedImage && (
          <Button
            width={10}
            type='button'
            text='SUBMIT'
            handleSubmit={() => uploadPhoto(editor)}
          />
        )}
      </ButtonContainer>
    </Modal>
  );
};

Editor.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleFile: PropTypes.func.isRequired,
  image: PropTypes.string,
  croppedImage: PropTypes.string,
  reselectImage: PropTypes.func.isRequired,
  handleCropImage: PropTypes.func.isRequired,
  uploadPhoto: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  image: '',
  croppedImage: '',
};

export default Editor;
