import { createSelector } from 'reselect';

const selectProfile = (state) => state.profile;

export const selectUserPhoto = createSelector(
  [selectProfile],
  (profile) => profile.userProfile.photo
);

export const selectEditProfile = createSelector([selectProfile], (profile) => {
  const { _id, name = '', bio = '', website = '' } = profile.userProfile;
  return {
    _id,
    name,
    bio,
    website,
  };
});

export const selectProfileId = createSelector(
  [selectProfile],
  // eslint-disable-next-line
  (profile) => profile.userProfile?._id
);

export const selectUserId = createSelector(
  [selectProfile],
  // eslint-disable-next-line
  (profile) => profile.userProfile?.user
);

export const selectIsLoading = createSelector(
  [selectProfile],
  (profile) => profile.loading
);

export const selectPostLoading = createSelector(
  [selectProfile],
  (profile) => profile.postLoading
);

export const selectPosts = createSelector(
  [selectProfile],
  (profile) => profile.posts
);

export const selectIsModalVisible = createSelector(
  [selectProfile],
  (profile) => profile.modal
);

export const selectUserProfile = createSelector([selectProfile], (profile) => {
  const {
    name = '',
    photo = '',
    user = '',
    _id = '',
    username = '',
  } = profile?.userProfile;
  return {
    name,
    photo,
    user,
    _id,
    username,
  };
});

export const selectFollowing = createSelector(
  [selectProfile],
  (profile) => profile.userProfile?.following
);

export const selectCurrentProfile = createSelector(
  [selectProfile],
  (profile) => profile.profile
);

export const selectUsername = createSelector(
  [selectProfile],
  (profile) => profile.userProfile?.username
);

export const selectFetchProfile = createSelector(
  [selectProfile],
  (profile) => !profile.profile
);

export const selectRealtimeNotification = createSelector(
  [selectProfile],
  (profile) => profile.realTimeNotification
);

export const selectNotification = createSelector(
  [selectProfile],
  (profile) => profile.notification
);
