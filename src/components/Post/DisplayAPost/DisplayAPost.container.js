import React, { useCallback, useEffect, useState } from 'react';
import PrivateRoute from '../../../ApiRoutes/PrivateApi';
import { setIsCached } from '../../../helpers/hooks/useLocalStorage';
import SpinnerOverlay from '../../shared/Spinner/SpinnerOverlay.component';
import PostContainer from '../DisplayPost/Post.container';
import { NoPost, SinglePost } from '../Post.style';

const DisplayAPostContainer = ({
  match: {
    params: { id },
  },
}) => {
  console.log(id);
  const [post, setPost] = useState({
    data: '',
    loading: true,
  });

  const { data, loading } = post;

  const fetchPost = useCallback(async () => {
    try {
      const res = await PrivateRoute(`post/${id}`, null, 'get', false, false);
      setPost((prevState) => ({
        ...prevState,
        loading: false,
        data: res?.data?.post || '',
      }));
    } catch (error) {
      console.log(error);
      setPost((prev) => ({ ...prev, loading: false }));
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const deletePost = useCallback(async () => {
    try {
      await PrivateRoute(`post/${id}`, null, 'delete', true, false);
      setPost((prev) => ({ ...prev, data: '' }));
      setIsCached('posts', false);
      alert('Post Deleted');
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const toggleLike = async (userId, socket, isLiked) => {
    try {
      const res = await PrivateRoute(
        `post/like/${data?._id}`,
        { data: 'like' },
        'post',
        true,
        false
      );
      setPost((prev) => ({ ...prev, data: res?.data?.post || '' }));
      console.log(socket, userId, data?.profile, isLiked);
      if (socket && userId !== data?.profile?._id && !isLiked) {
        console.log('User liked');
        socket.emit('notification', {
          to: data?.profile?._id,
          user: userId,
          post: data?._id,
        });
      }
      setIsCached('posts', false);
    } catch (error) {}
  };

  return loading ? (
    <SpinnerOverlay text='Fetching Post' />
  ) : data ? (
    <SinglePost>
      <PostContainer
        posts={[data]}
        singlePostHandler={toggleLike}
        deletePost={deletePost}
      />
    </SinglePost>
  ) : (
    <NoPost>No Post Found</NoPost>
  );
};

export default DisplayAPostContainer;
