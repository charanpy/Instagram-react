import React from 'react';
import { formatDistance } from 'date-fns';
import ProfileImage from '../../shared/ProfileImage/ProfileImage.component';
import {
  IconContainer,
  ShowDelete,
  ShowNotif,
} from '../../MainNotification/Notification.style';

import {
  Date as Time,
  PostContainer,
  Profile,
  Navigate,
  Name,
  CaptionContainer,
  Caption,
  Post as UserPost,
  Like,
  Button,
} from '../Post.style';

const Post = ({
  likes,
  post,
  name,
  username,
  photo,
  caption,
  createdAt,
  submitHandler,
  id,
  postId,
  isLiked,
  showDelete,
  deletePost,
}) => {
  console.log(postId);
  const time = formatDistance(new Date(createdAt).getTime(), new Date(), {
    addSuffix: true,
    includeSeconds: true,
  }).split(' ');
  const formattedTime =
    time.length > 3 ? time.slice(1).join(' ') : time.join(' ');
  return (
    <PostContainer>
      <Navigate to={`/${username}`}>
        <Profile>
          <ProfileImage chatProfile={photo} height={2.5} />
          <Name>{name && name}</Name>
        </Profile>
      </Navigate>

      <UserPost src={post} />
      <IconContainer>
        <Button onClick={() => submitHandler(id, postId, isLiked)}>
          <ShowNotif hasNotification={isLiked} className='fas fa-heart' />
        </Button>
        {showDelete ? (
          <Button onClick={deletePost}>
            <ShowDelete className='fas fa-trash' />
          </Button>
        ) : (
          ''
        )}
      </IconContainer>
      {likes.length ? (
        <Like>
          {likes.length > 1 ? `${likes.length} likes` : `${likes.length} like`}
        </Like>
      ) : (
        <div />
      )}
      <CaptionContainer>
        <Navigate to={`/${username}`}>
          <Name caption>{name && name}</Name>
        </Navigate>
        <Caption>{caption}</Caption>
      </CaptionContainer>
      <Time>{formattedTime}</Time>
    </PostContainer>
  );
};

export default Post;
