import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Editor from './Editor.component';
import { fileValidator } from '../../../helpers/helpers';

const EditorContainer = ({ modal, toggleModal, uploadImage }) => {
  const [file, setFile] = useState({
    detail: '',
    image: '',
    croppedImage: '',
    reader: new FileReader(),
    blob: '',
  });
  const { image, croppedImage, reader, blob, detail } = file;

  const handleFileReader = useCallback(
    (fileDetail) => {
      setFile((prevFile) => ({
        ...prevFile,
        image: reader.result,
        detail: fileDetail,
      }));
    },
    [reader]
  );

  useEffect(() => {
    console.log('');
    return () => {
      reader.removeEventListener('load', handleFileReader);
    };
  }, [reader, handleFileReader]);

  const reselectImage = useCallback(() => {
    setFile({
      image: '',
      croppedImage: '',
    });
  }, []);

  const unMountModal = useCallback(() => {
    setFile({
      detail: '',
      image: '',
      croppedImage: '',
      reader: new FileReader(),
      blob: '',
    });
    toggleModal();
  }, [toggleModal]);
  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile || !fileValidator(selectedFile)) {
      alert('Please select Image file');
      return false;
    }
    try {
      reader.readAsDataURL(selectedFile);
      reader.addEventListener('load', () => handleFileReader(selectedFile));
    } catch (error) {
      alert('unable to process file! Please try again');
    }

    return true;
  };

  const handleCropImage = useCallback((editor) => {
    editor.current.getImageScaledToCanvas().toBlob((blobs) => {
      const imageURL = URL.createObjectURL(blobs);
      setFile((prevFile) => ({
        ...prevFile,
        croppedImage: imageURL,
        blob: blobs,
      }));
    });
  }, []);

  const uploadPhoto = async () => {
    const data = new FormData();
    data.append('image', blob, detail.name);
    uploadImage(data);
    unMountModal();
  };
  return (
    <Editor
      modal={modal}
      toggleModal={toggleModal}
      handleFile={handleFile}
      image={image}
      croppedImage={croppedImage}
      reselectImage={reselectImage}
      handleCropImage={handleCropImage}
      uploadPhoto={uploadPhoto}
    />
  );
};

EditorContainer.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  uploadImage: PropTypes.func,
};

EditorContainer.defaultProps = {
  uploadImage: '',
};

export default EditorContainer;
