import { takeLatest, put, all, call } from 'redux-saga/effects';
import { profileActionTypes } from './profile.type';
import { generateUniqueId as getUniqueId } from '../../helpers/helpers';
import { setAlert } from '../alert/alert.action';
import {
  uploadImageSuccess,
  uploadImageFailure,
  editProfileSuccess,
  editProfileFailure,
  getProfileFailure,
  getProfileSuccess,
  followSuccess,
  followFailure,
  fetchNotificationSuccess,
  fetchNotificationFailure,
  setNotificationSuccess,
  createPostSuccess,
  getPostSuccess,
  getPostFailure,
  likePostSuccess,
} from './profile.action';
import PrivateApiRoute from '../../ApiRoutes/PrivateApi';
import { setIsCached } from '../../helpers/hooks/useLocalStorage';

export function* uploadImage({ payload }) {
  try {
    const { data, type } = payload;
    const response = yield call(
      PrivateApiRoute,
      'profile/profile-photo/',
      data,
      type,
      true,
      true
    );
    console.log(response);
    yield put(uploadImageSuccess(response.data.profile.photo.secure_url));
  } catch (error) {
    console.log(error, error.response);
    const id = getUniqueId();
    yield put(uploadImageFailure());
    yield put(setAlert(id, 'Failed to upload Image. Please try again'));
  }
}

export function* onUploadImageStart() {
  yield takeLatest(profileActionTypes.UPLOAD_IMAGE_START, uploadImage);
}

export function* editProfile({ payload }) {
  try {
    const res = yield call(
      PrivateApiRoute,
      'profile/',
      payload,
      'put',
      true,
      false
    );
    console.log(res);
    yield put(editProfileSuccess(res.data.data.profile));
  } catch (error) {
    console.log(error, error.response);
    yield put(editProfileFailure());
  }
}

export function* onEditProfileStart() {
  yield takeLatest(profileActionTypes.EDIT_PROFILE_START, editProfile);
}

export function* getProfile({ payload }) {
  try {
    const response = yield call(
      PrivateApiRoute,
      `profile/${payload}`,
      null,
      'get',
      false,
      false
    );
    console.log(response);
    yield put(getProfileSuccess(response.data?.data?.profile));
  } catch (error) {
    console.log(error.response);
    yield put(getProfileFailure());
  }
}

export function* onGetProfileStart() {
  yield takeLatest(profileActionTypes.GET_PROFILE_START, getProfile);
}

export function* followStart({ payload }) {
  try {
    const { id, name, socket, follow, userId } = payload;
    const res = yield call(
      PrivateApiRoute,
      `profile/${follow}`,
      { id, name },
      'post',
      true,
      false
    );
    console.log(res);
    yield put(
      followSuccess({
        data: res.data.following.following,
        user: res.data.user,
      })
    );
    if (socket) {
      socket.emit('notification', {
        to: id,
        user: userId,
        type: 'Follow',
      });
    }
  } catch (error) {
    console.log(error, error.response);
    yield put(followFailure());
  }
}

export function* onFollowStart() {
  yield takeLatest(profileActionTypes.FOLLOW_START, followStart);
}

export function* getNotification() {
  try {
    const response = yield call(
      PrivateApiRoute,
      'profile/notifications',
      null,
      'get',
      true,
      false
    );
    console.log(response);
    yield put(fetchNotificationSuccess(response.data?.notifications));
    yield call(setIsCached, 'notifications', true);
  } catch (error) {
    console.log(error.response);
    yield put(fetchNotificationFailure());
  }
}

export function* onGetNotificationStart() {
  yield takeLatest(
    profileActionTypes.FETCH_NOTIFICATION_START,
    getNotification
  );
}

export function* setNotification() {
  yield put(setNotificationSuccess());
}

export function* onSetNotificationStart() {
  yield takeLatest(profileActionTypes.SET_NOTIFICATION_START, setNotification);
}

export function* createPost({ payload }) {
  try {
    const response = yield call(
      PrivateApiRoute,
      'post/',
      payload,
      'post',
      true,
      true
    );
    console.log(response);
    yield put(createPostSuccess());
    alert('Post created successfully');
    yield call(setIsCached, 'posts', false);
  } catch (error) {
    console.log(error, error.response);
    const id = getUniqueId();
    yield put(setAlert(id, 'Failed to upload Image. Please try again'));
  }
}

export function* onCreatePostStart() {
  yield takeLatest(profileActionTypes.CREATE_POST_START, createPost);
}

export function* getPost() {
  try {
    const response = yield call(
      PrivateApiRoute,
      'post/',
      null,
      'get',
      true,
      false
    );
    console.log(response);
    yield put(getPostSuccess(response.data.posts));
    yield call(setIsCached, 'posts', true);
  } catch (error) {
    console.log(error);
    yield put(getPostFailure());
  }
}

export function* onGetPostStart() {
  yield takeLatest(profileActionTypes.GET_POST_START, getPost);
}

export function* likePost({ payload }) {
  try {
    const { id, postId, socket, userId, isLiked } = payload;
    const res = yield call(
      PrivateApiRoute,
      `post/like/${postId}`,
      { data: 'like' },
      'post',
      true,
      false
    );
    console.log(res);
    yield put(
      likePostSuccess({
        postId: res.data.post._id,
        post: res.data.post,
      })
    );
    if (socket && id !== userId && !isLiked) {
      socket.emit('notification', {
        to: id,
        user: userId,
        post: postId,
      });
    }
  } catch (error) {
    console.log(error, error.response);
  }
}

export function* onLikePostStart() {
  yield takeLatest(profileActionTypes.LIKE_POST_START, likePost);
}

export function* profileSagas() {
  yield all([
    call(onGetProfileStart),
    call(onUploadImageStart),
    call(onEditProfileStart),
    call(onFollowStart),
    call(onGetNotificationStart),
    call(onSetNotificationStart),
    call(onCreatePostStart),
    call(onGetPostStart),
    call(onLikePostStart),
  ]);
}
