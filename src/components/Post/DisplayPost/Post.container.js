import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { likePostStart } from '../../../redux-sagas/profile/profile.action';
import { selectProfileId } from '../../../redux-sagas/profile/profile.selector';
import DisplayPost from './Post.component';
import { SocketContext } from '../../../context/socket';
import { PostsContainer } from '../Post.style';

const PostContainer = ({
  posts,
  id: userId,
  likePostStart: likePost,
  singlePostHandler = false,
  deletePost,
}) => {
  const { socket } = React.useContext(SocketContext);
  const submitHandler = (id, postId, isLiked) => {
    if (singlePostHandler) return singlePostHandler(userId, socket, isLiked);
    likePost({ id, postId, socket, userId, isLiked });
  };
  return (
    <PostsContainer>
      {posts.length
        ? posts.map(
            ({
              createdAt,
              caption = null,
              image,
              profile: { name, username, photo, _id },
              likes,
              _id: postId,
            }) => (
              <DisplayPost
                key={postId}
                post={image[0] && image[0]?.url}
                name={name}
                username={username}
                photo={photo?.secure_url || photo}
                caption={caption}
                createdAt={createdAt}
                likes={likes}
                id={_id}
                postId={postId}
                isLiked={likes.includes(userId)}
                submitHandler={submitHandler}
                showDelete={singlePostHandler && userId === _id}
                deletePost={deletePost}
              />
            )
          )
        : ''}
    </PostsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  id: selectProfileId,
  // user: selectUserId,
});

const mapDispatchToProps = (dispatch) => ({
  likePostStart: (data) => dispatch(likePostStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
