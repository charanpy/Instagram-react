import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../helpers/helpers';
import InputComponent from '../shared/Input/Input.component';
import UseModal from '../shared/Modal/Modal.state';
import Editor from '../shared/ImageEditor/Editor.container';
import Button from '../shared/Button/Button.component';
import { PostContainer, Header } from './Post.style';

const Post = ({ caption, submitHandler }) => {
  console.log('Post');
  const [modal, toggleModal] = UseModal();

  return (
    <PostContainer>
      <Header>Create Post</Header>
      <InputComponent
        ref={caption}
        name='caption'
        type='name'
        placeholder='Caption'
      />
      <Button type='button' text='Upload Image' handleSubmit={toggleModal} />
      <Editor
        modal={modal}
        toggleModal={toggleModal}
        uploadImage={submitHandler}
      />
    </PostContainer>
  );
};

Post.propTypes = {
  caption: Input,
  submitHandler: PropTypes.func.isRequired,
};

Post.defaultProps = {
  caption: null,
};

export default Post;
