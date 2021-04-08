import React from 'react';
import { Container } from '../../helpers/CommonStyles';
import CreatePost from '../../components/Post/Post.container';

const Post = () => {
  console.log('Post');
  return (
    <Container>
      <CreatePost />
    </Container>
  );
};

export default Post;
