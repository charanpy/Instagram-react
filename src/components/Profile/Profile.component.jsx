import React from 'react';
import PropTypes from 'prop-types';
import { ProfilePropTypes } from '../../helpers/helpers';
import ProfileImage from '../shared/ProfileImage/ProfileImage.component';
import UserActivity from './UserActivity/UserActivity.component';
import ButtonContainer from './ButtonContainer/ButtonContainer.component';
import Bio from './Bio/Bio.component';
import Follow from './ButtonContainer/Follow/Follow.container';
import {
  ProfileWrapper,
  UserInfo,
  UserDetailWrap,
  UsernameWrap,
  Username,
  ProfileImageContainer,
  DisplayPost,
  PostImage,
} from './Profile.style';
import { Link } from 'react-router-dom';

const Profile = ({
  profile: {
    _id,
    photo,
    username,
    followers = {},
    following = {},
    posts = [],
    name,
    bio = '',
    website = '',
  },
  id,
}) => {
  console.log('Profile', id, _id);
  return (
    <>
      <ProfileWrapper>
        <UserInfo>
          <ProfileImageContainer>
            <ProfileImage chatProfile={photo} height={15} />
            <Bio name={name} website={website} bio={bio} />
          </ProfileImageContainer>
          <UserDetailWrap>
            <UsernameWrap>
              <Username>
                {username}
                {id === _id ? (
                  <ButtonContainer />
                ) : (
                  <Follow _id={_id} username={username} id={id} />
                )}
              </Username>
            </UsernameWrap>
            <UserActivity
              followers={Object.keys(followers).length}
              following={Object.keys(following).length}
              post={posts.length}
            />
          </UserDetailWrap>
        </UserInfo>
        <DisplayPost>
          {posts?.length
            ? posts.map((post) => (
                <Link to={`/post/${post?._id}`} key={post?._id}>
                  <PostImage alt='posts' src={post?.image?.[0]?.url} />
                </Link>
              ))
            : ''}
        </DisplayPost>
      </ProfileWrapper>
    </>
  );
};

Profile.propTypes = {
  photo: PropTypes.string,
  username: PropTypes.string,
  followers: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string,
      user: ProfilePropTypes,
    })
  ),
  following: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string,
      user: ProfilePropTypes,
    })
  ),
  posts: PropTypes.arrayOf(PropTypes.array),
  name: PropTypes.string,
  profile: ProfilePropTypes.isRequired,
  bio: PropTypes.string,
  website: PropTypes.string,
  id: PropTypes.string.isRequired,
  _id: PropTypes.string,
};

Profile.defaultProps = {
  followers: {},
  following: {},
  posts: [],
  photo: '',
  username: 'test',
  name: 'test',
  bio: '',
  website: '',
  _id: '',
};

export default Profile;
