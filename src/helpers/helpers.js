import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
/* eslint-disable */
export const setTheme = (theme = 'dark') =>
  window && localStorage.setItem('theme', JSON.stringify(theme));

export const getTheme = () =>
  window && JSON.parse(localStorage.getItem('theme'));

export const generateUniqueId = () => uuidv4();

export const Input = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: null }),
  PropTypes.shape({ current: PropTypes.elementType }),
]);

export const Photo = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    public_id: PropTypes.string,
    secure_url: PropTypes.string,
  }),
]);
export const ProfilePropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  user: PropTypes.string,
  photo: Photo,
});

export const Group = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  groupType: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
});

export const GroupPropTypes = PropTypes.objectOf(Group);

export const String = PropTypes.string;

export const historyProp = PropTypes.shape({
  push: PropTypes.func.isRequired,
});

export const currentGroup = PropTypes.shape({
  groupId: PropTypes.string.isRequired,
  name: PropTypes.string,
  username: PropTypes.string,
  profileId: PropTypes.string,
  photo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      public_id: PropTypes.string,
      secure_url: PropTypes.string,
    }),
  ]),
});

export const MessagePropType = PropTypes.arrayOf([
  PropTypes.shape({
    createdAt: PropTypes.string,
    groupId: PropTypes.string,
    message: PropTypes.string,
    to: PropTypes.string,
    sender: PropTypes.string,
    seen: PropTypes.any,
    _id: PropTypes.string,
  }),
]);

export const uploadFileType = ['jpeg', 'jpg', 'png'];

export const fileValidator = (file) =>
  uploadFileType.includes(file?.name.split('.')[1]);

export const UserProfilePropTypes = PropTypes.shape({
  accountType: PropTypes.string,
  _id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string,
  photo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      secure_url: PropTypes.string,
      public_id: PropTypes.string,
    }),
  ]),
  requests: PropTypes.array,
  followers: PropTypes.objectOf(
    PropTypes.shape({
      user: PropTypes.string,
    })
  ),
  following: PropTypes.objectOf(
    PropTypes.shape({
      user: PropTypes.string,
    })
  ),
  bio: PropTypes.string,
  website: PropTypes.string,
});

export const EditProfile = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  bio: PropTypes.string,
  website: PropTypes.string,
});

export const Post = PropTypes.shape({
  caption: PropTypes.string,
  commentsPost: PropTypes.array,
  createAt: PropTypes.string,
  likes: PropTypes.array,
  id: PropTypes.string,
  _id: PropTypes.string,
  profile: UserProfilePropTypes,
  hashtag: PropTypes.array,
  image: PropTypes.array,
});

export const Notify = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      user: ProfilePropTypes,
      createdAt: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      seen: PropTypes.bool.isRequired,
      _id: PropTypes.string,
      // post: Post,
    })
  ),
]);
