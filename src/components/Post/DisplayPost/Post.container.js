import React from 'react';
import DisplayPost from './Post.component';
/* eslint-disable */
const PostContainer = ({ posts }) => {
  console.log('');
  return (
    <>
      {posts.length &&
        posts.map(
          ({
            createdAt,
            caption = null,
            image,
            profile: { name, username, photo },
          }) => (
            <DisplayPost
              post={image[0] && image[0]?.url}
              name={name}
              username={username}
              photo={photo?.secure_url || photo}
              caption={caption}
              createdAt={createdAt}
            />
          )
        )}
    </>
  );
};

export default PostContainer;
