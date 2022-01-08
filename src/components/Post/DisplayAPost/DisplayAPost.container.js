import React, { useCallback, useEffect, useState } from 'react';
import PrivateRoute from '../../../ApiRoutes/PrivateApi';
import { setIsCached } from '../../../helpers/hooks/useLocalStorage';
import SpinnerOverlay from '../../shared/Spinner/SpinnerOverlay.component';
import PostContainer from '../DisplayPost/Post.container';
import { SinglePost } from '../Post.style';

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
    }
  }, [id]);

  console.log(data);
  const toggleLike = async () => {
    try {
      const res = await PrivateRoute(
        `post/like/${data?._id}`,
        { data: 'like' },
        'post',
        true,
        false
      );
      setPost((prev) => ({ ...prev, data: res?.data?.post || '' }));
      setIsCached('posts', false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
  return loading ? (
    <SpinnerOverlay text='Fetching Post' />
  ) : data ? (
    <SinglePost>
      <PostContainer posts={[data]} singlePostHandler={toggleLike} />
    </SinglePost>
  ) : (
    'No Post Found'
  );
};

export default DisplayAPostContainer;
