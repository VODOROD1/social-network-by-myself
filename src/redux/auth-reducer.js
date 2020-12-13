const LOGIN = 'LOGIN'
const EXIT = 'EXIT'
const AUTH_ME = 'AUTH_ME'
const SET_IS_AUTH = 'SET_IS_AUTH'

let initialState = {
  isAuth: false,
  resultCode: 0,
  messages: [],
  data: {
    id: 0,
    login: '',
    email: '',
  }
}

const authReducer = (state=initialState,action) => {
  switch(action.type) {
    case LOGIN: {
      return {...action.authData}
    }
    case EXIT: {
      return state
    }
    case AUTH_ME: {
      return {...state, data: {...action.authData}}
    }
    default:
      return state
  }
}

export const authMeAC = (authData) => {
  return {
    type: AUTH_ME,
    authData
  }
}

export const authLoginAC = (authData) => {
  return {
    type: LOGIN,
    authData
  }
}

export const exitAC = () => {
  return {
    type: EXIT
  }
}

export default authReducer