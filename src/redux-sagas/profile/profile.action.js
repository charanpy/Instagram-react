import { profileActionTypes } from './profile.type';

export const getProfileStart = (username) => ({
  type: profileActionTypes.GET_PROFILE_START,
  payload: username,
});

export const getProfileSuccess = (profile) => ({
  type: profileActionTypes.GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileFailure = () => ({
  type: profileActionTypes.GET_PROFILE_FAILURE,
});

export const setUserProfile = (userProfile) => ({
  type: profileActionTypes.SET_USER_PROFILE,
  payload: userProfile,
});

export const setModalVisible = () => ({
  type: profileActionTypes.SET_MODAL_VISIBLE,
});

export const emptyUpProfile = () => ({
  type: profileActionTypes.EMPTY_UP_PROFILE,
});

export const uploadImageStart = (data, type) => ({
  type: profileActionTypes.UPLOAD_IMAGE_START,
  payload: { data, type },
});

export const uploadImageSuccess = (profile) => ({
  type: profileActionTypes.UPLOAD_IMAGE_SUCCESS,
  payload: profile,
});

export const uploadImageFailure = () => ({
  type: profileActionTypes.UPLOAD_IMAGE_FAILURE,
});

export const editProfileStart = (data) => ({
  type: profileActionTypes.EDIT_PROFILE_START,
  payload: data,
});

export const editProfileSuccess = (data) => ({
  type: profileActionTypes.EDIT_PROFILE_SUCCESS,
  payload: data,
});

export const editProfileFailure = () => ({
  type: profileActionTypes.EDIT_PROFILE_FAILURE,
});

export const followStart = (id, name, socket = null, follow, userId) => ({
  type: profileActionTypes.FOLLOW_START,
  payload: { id, name, socket, follow, userId },
});

export const followSuccess = (data) => ({
  type: profileActionTypes.FOLLOW_SUCCESS,
  payload: data,
});

export const followFailure = () => ({
  type: profileActionTypes.FOLLOW_FAILURE,
});

export const setNotificationStart = () => ({
  type: profileActionTypes.SET_NOTIFICATION_START,
});

export const setNotificationSuccess = () => ({
  type: profileActionTypes.SET_NOTIFICATION_SUCCESS,
});

export const fetchNotificationStart = () => ({
  type: profileActionTypes.FETCH_NOTIFICATION_START,
});

export const fetchNotificationSuccess = (data) => ({
  type: profileActionTypes.FETCH_NOTIFICATION_SUCCESS,
  payload: data,
});

export const fetchNotificationFailure = () => ({
  type: profileActionTypes.FETCH_NOTIFICATION_FAILURE,
});

export const createPostStart = (data) => ({
  type: profileActionTypes.CREATE_POST_START,
  payload: data,
});

export const createPostSuccess = () => ({
  type: profileActionTypes.CREATE_POST_SUCCESS,
});

export const getPostStart = () => ({
  type: profileActionTypes.GET_POST_START,
});

export const getPostSuccess = (post) => ({
  type: profileActionTypes.GET_POST_SUCCESS,
  payload: post,
});

export const getPostFailure = () => ({
  type: profileActionTypes.GET_POST_FAILURE,
});

export const likePostStart = (data) => ({
  type: profileActionTypes.LIKE_POST_START,
  payload: data,
});

export const likePostSuccess = (data) => ({
  type: profileActionTypes.LIKE_POST_SUCCESS,
  payload: data,
});
