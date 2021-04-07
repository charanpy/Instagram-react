import { profileActionTypes } from './profile.type';

const initialStateProfile = {
  loading: false,
  success: false,
  profile: null,
  userProfile: null,
  realTimeNotification: false,
  notification: [],
};

const storeProfile = (profile) => {
  const { photo } = profile;
  if (photo?.secure_url) {
    const modifiedPhoto = { ...profile };
    modifiedPhoto.photo = photo.secure_url;
    return modifiedPhoto;
  }
  return profile;
};

const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case profileActionTypes.GET_PROFILE_START:
      return {
        ...state,
        loading: true,
        success: false,
        profile: null,
      };

    case profileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        profile: storeProfile(action.payload),
      };

    case profileActionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        profile: null,
      };

    case profileActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        realtimeNotification: !!action.payload.notification,
        userProfile: storeProfile(action.payload.profile),
      };
    case profileActionTypes.SET_MODAL_VISIBLE:
      return {
        ...state,
        modal: !state.modal,
      };
    case profileActionTypes.EMPTY_UP_PROFILE:
      return initialStateProfile;
    case profileActionTypes.UPLOAD_IMAGE_START:
    case profileActionTypes.EDIT_PROFILE_START:
      return {
        ...state,
        success: false,
        loading: true,
      };
    case profileActionTypes.FETCH_NOTIFICATION_START:
      return {
        ...state,
        success: false,
        loading: true,
        realtimeNotification: false,
      };
    case profileActionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userProfile: {
          ...state.userProfile,
          photo: action.payload,
        },
      };
    case profileActionTypes.UPLOAD_IMAGE_FAILURE:
    case profileActionTypes.EDIT_PROFILE_FAILURE:
    case profileActionTypes.FETCH_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case profileActionTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userProfile: storeProfile(action.payload),
      };
    case profileActionTypes.FOLLOW_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        profile: {
          ...state.profile,
          followers: action.payload.user,
        },
        userProfile: {
          ...state.userProfile,
          following: action.payload.data,
        },
      };
    case profileActionTypes.SET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        realtimeNotification: true,
      };
    case profileActionTypes.FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: false,
        notification: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
