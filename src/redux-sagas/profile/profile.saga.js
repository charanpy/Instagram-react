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
} from './profile.action';
import PrivateApiRoute from '../../ApiRoutes/PrivateApi';

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
export function* profileSagas() {
  yield all([
    call(onGetProfileStart),
    call(onUploadImageStart),
    call(onEditProfileStart),
    call(onFollowStart),
  ]);
}
