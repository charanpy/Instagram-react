import { profileActionTypes } from './profile.type';

const initialStateProfile = {
  loading: false,
  success: false,
  profile: null,
  userProfile: null,
  realTimeNotification: false,
  notification: [],
  posts: [],
  postLoading: false,
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
// TODO LIKES SCHEMA MAP DS
const likePost = (state, postId, post) => {
  const postIndex = state.findIndex((posts) => posts._id === postId);
  const updatedPost = [...state];
  updatedPost[postIndex] = post;
  return updatedPost;
};

const optimizeLikePost = (state, postId, userId) => {
  const getPostIndex = state.findIndex((posts) => posts._id === postId);
  console.log(postId, userId, getPostIndex);

  if (state?.[getPostIndex]?.likes?.includes(userId)) {
    const likes = state[getPostIndex].likes.filter((like) => like !== userId);
    console.log(likes, 33);
    const modifiedLike = {
      ...state[getPostIndex],
      likes,
    };
    const postRef = [...state];
    postRef[getPostIndex] = modifiedLike;
    return postRef;
  }
  const like = [...state[getPostIndex].likes, userId];
  console.log(like);
  const addedLikePost = {
    ...state[getPostIndex],
    likes: like,
  };
  const allPosts = [...state];

  allPosts[getPostIndex] = addedLikePost;
  return allPosts;
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
        realTimeNotification: !!action.payload.notification,
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
        realTimeNotification: false,
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
        realTimeNotification: true,
      };
    case profileActionTypes.FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: false,
        notification: action.payload,
      };
    case profileActionTypes.GET_POST_START:
      return {
        ...state,
        postLoading: true,
      };
    case profileActionTypes.GET_POST_FAILURE:
      return {
        ...state,
        postLoading: false,
      };
    case profileActionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        posts: action.payload,
      };
    case profileActionTypes.LIKE_POST_START:
      return {
        ...state,
        posts: optimizeLikePost(
          state.posts,
          action.payload.postId,
          action.payload.userId
        ),
      };
    case profileActionTypes.LIKE_POST_SUCCESS:
      return {
        ...state,
        posts: likePost(
          state.posts,
          action.payload.postId,
          action.payload.post
        ),
      };
    default:
      return state;
  }
};

export default profileReducer;
