import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPostStart } from '../../redux-sagas/profile/profile.action';
import Post from './Post';

const PostContainer = ({ createPostStart: createPost }) => {
  const captionRef = useRef(null);
  const submitHandler = (data) => {
    data.append('caption', captionRef?.current?.value);
    createPost(data);
    captionRef.current.value = '';
  };
  return <Post caption={captionRef} submitHandler={submitHandler} />;
};

PostContainer.propTypes = {
  createPostStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createPostStart: (post) => dispatch(createPostStart(post)),
});

export default connect(null, mapDispatchToProps)(PostContainer);
