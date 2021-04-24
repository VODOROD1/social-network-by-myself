import {profileAPI} from '../../api/api'
import {stopSubmit} from 'redux-form'

const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO = 'SAVE_PHOTO'

let initialState = {
  profile: null,
  profileUpdateFlag: false,
  status: '',
  posts: 
  [
    {
      id: 1,
      postText: 'Hi, how are you?',
      likesCount: 11
    },
    {
      id: 2,
      postText: "It's my first post",
      likesCount: 12
    },
    {
      id: 3,
      postText: 'BlaBla',
      likesCount: 13
    },
    {
      id: 4,
      postText: 'Dada',
      likesCount: 14
    }
  ]
}

const profileReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_NEW_POST:
      let newPost = {
          id: state.posts.length+1,
          postText: action.newPostText, 
          likesCount: 0
      }
      return {...state,
              newPostText: '',
              posts: [...state.posts,newPost]
      }
    // case UPDATE_NEW_POST_TEXT:
    //   return {...state, newPostText: action.newPostText}
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_STATUS:
      return {...state, status: action.status}
    case SAVE_PHOTO:
      return {...state, profile: {...state.profile, photos: {...state.profile.photos, large:action.photo}}}
    default:
      return state
  }
}

// Далее идут action creators
// export const updateNewPostTextAC = (newText) => {
//   return {
//     type: 'UPDATE_NEW_POST_TEXT',
//     newPostText: newText
//   }
// }

export const addNewPostAC = (newPostText) => {
  return {
    type: 'ADD_NEW_POST',
    newPostText
  }
}

export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

const setStatusAC = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

const savePhotoAC = (photo) => {
  return {
    type: SAVE_PHOTO,
    photo
  }
}

// THUNKS
export const setUserProfileTC = (userId) => {
  return (dispatch) => {
    // toggleIsFetching(true)
    profileAPI.getUser(userId)
              .then(data => {
                  dispatch(setUserProfileAC(data))  // Прокидываем профиль в store
                  // toggleIsFetching(false)
              })
  }
}

export const getStatusTC = (userId) => {
  return dispatch => {
    profileAPI.getStatus(userId)
              .then((status) => {
                dispatch(setStatusAC(status))
              })
  }
}

export const updateStatusTC = (newStatus) => {
  return dispatch => {
    profileAPI.updateStatus(newStatus)
    .then((resultCode) => {
      if(resultCode === 0) {
        dispatch(setStatusAC(newStatus))
      }
    })
  }
}

export const savePhotoTC = (photo) => {
  return async (dispatch) => {
      let response = await profileAPI.savePhoto(photo)
      if(response.resultCode === 0) {
          dispatch(savePhotoAC(photo))
      }
  }
}

export const setProfileDataTC = (data) => {
  return async (dispatch) => {
    let response = await profileAPI.setProfileData(data)
    if(response.resultCode === 0) {
      dispatch(setUserProfileAC(data))
      return Promise.resolve(false)
    } else {
      let errors = validateErrorMessages(response.messages)
      dispatch(stopSubmit("ProfileData", errors));
      return Promise.reject(errors);
    }
  }
}

// Валидация ошибок в результате запроса
const validateErrorMessages = (messages) => {
  const regExp = />\w+/
  let errors = {}
  // let errors = []
  for(let i=0; messages.length > i; i++) {
      // errorsArr.push(response.messages[i])
      if(regExp.test(messages[i])) {
        let temp = messages[i].match(regExp)[0]
        let nameField = temp[1].toLowerCase() + temp.slice(2)
        errors[nameField] = messages[i]
        // errors.push(response.messages[i])
      }
  }
  return errors
}

export default profileReducer;