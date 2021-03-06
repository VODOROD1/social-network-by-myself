import {userAPI,profileAPI} from '../DAL/api'

const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'

let initialState = {
  posts: 
      [
        {
          postText: 'Hi, how are you?',
          likesCount: 11
        },
        {
          postText: "It's my first post",
          likesCount: 12
        },
        {
          postText: 'BlaBla',
          likesCount: 13
        },
        {
          postText: 'Dada',
          likesCount: 14
        }
      ],
  profile: {},
  status: '',
  isFetching: true,
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_POST:
      return {...state, posts: [...state.posts, 
        {
          postText: action.newPostText, 
          likesCount: 0
        }
      ]}
    // case UPDATE_NEW_POST_TEXT:
    //   return {...state, newPostText: action.newPostText}
    case SET_USER_PROFILE:
      return {...state, profile: action.userProfile}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case SET_STATUS:
      return {...state, status: action.newStatus}
    case SET_PHOTO:
      return {...state, profile: {...state.profile, photos: {...state.photos, large: action.photo}}}
    default:
      return state
  }
}
// Далее идут action creators
export const addNewPostAC = (newPostText) => {
  return {
    type: 'ADD_NEW_POST',
    newPostText
  }
}

export const setUserProfileAC = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
}
const toggleIsFetchingAC = (boolVal) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: boolVal
  }
}
export const setStatusAC = (newStatus) => {
  return {
    type: SET_STATUS,
    newStatus
  }
}
const setPhotoAC = (photo) => {
  return {
    type: SET_PHOTO,
    photo
  }
}

//Далее идут thunk creators
export const setUserTC = (userId) => {
  return (dispatch) => {
      dispatch(toggleIsFetchingAC(true))
      userAPI.getUser(userId)
            .then(data => {
              let action = setUserProfileAC(data)
              dispatch(action)
              dispatch(toggleIsFetchingAC(false))
            })
  }
}

export const setStatusTC = (userId) => {
  return async(dispatch) => {
      let response = await profileAPI.getStatus(userId)
      let action = setStatusAC(response)
      dispatch(action)        
  }
}

export const updateStatusTC = (newStatus) => {
  return async (dispatch) => {
      let response = await profileAPI.updateStatus(newStatus)
      if(response.resultCode === 0) {
        let action = setStatusAC(newStatus)
        dispatch(action)
      }
  }
}

export const setPhotoTC = (photo) => {
  return async(dispatch) => {
      let response = await profileAPI.setPhoto(photo)
      debugger;
      if(response.resultCode === 0) {
        let action = setPhotoAC(response.data.photos.large)
        dispatch(action)
      }
  }
}

export default profileReducer;