import {authAPI} from '../DAL/api'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const AUTH_ME = 'AUTH_ME'
const SET_IS_AUTH = 'SET_IS_AUTH'

let initialState = {
  isAuth: false,
  resultCode: 0,
  messages: [],
  data: {
    id: null,
    login: null,
    email: null,
  }
}

const authReducer = (state=initialState,action) => {
  switch(action.type) {
    case LOGIN: {
      return {...action.authData}
    }
    case LOGOUT: {
      return {...state, isAuth: false, data: {
          id: null,
          login: null,
          email: null,
      }}
    }
    case AUTH_ME: {
      return {...state, isAuth: action.isAuth, data: {...action.authData}}
    }
    default:
      return state
  }
}

// Далее идут action creators
const authMeAC = (authData,isAuth) => {
  return {
    type: AUTH_ME,
    authData,
    isAuth
  }
}

const authLoginAC = (authData) => {
  return {
    type: LOGIN,
    authData
  }
}

const logoutAC = () => {
  return {
    type: LOGOUT
  }
}

// Далее идут thunk creators
export const authMeTC = () => {
  return (dispatch) => {
      authAPI.authMe()
            .then(data => {
              if(data.resultCode === 0) {
                let action = authMeAC(data.data,true)
                dispatch(action)
              } else {
                let action = authMeAC(data.data,false)
                dispatch(action)
              }
            })
  }
}

export const loginTC = (emailValue,passwordValue,rememberMe) => {
  return (dispatch) => {
    authAPI.login(emailValue,passwordValue,rememberMe)
          .then(data => {
            if(data.resultCode === 0) {
              dispatch(authMeTC())
            }
          })
  }
}

export const logoutTC = () => {
  return dispatch => {
    authAPI.logout()
          .then(data => {
            if(data.resultCode === 0) {
              let action = logoutAC()
              dispatch(action)
            }
          })
  }
}

export default authReducer