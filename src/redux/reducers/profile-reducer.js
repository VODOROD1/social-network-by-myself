import {profileAPI} from '../../api/api'

const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  profile: null,
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

export default profileReducer;