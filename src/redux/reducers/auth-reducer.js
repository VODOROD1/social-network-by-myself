import {authAPI} from '../../api/api'
import {setUserProfileTC} from '../reducers/profile-reducer'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const LOG_IN = 'LOG_IN' 
const LOG_OUT = 'LOG_OUT'

let initialState = {
    email: 'someEmail',
    id: null,
    login: '',
    isAuth: false
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case LOG_IN:
            return {
                ...state,
                id: action.id
            }
        case LOG_OUT:
            return {

            }
        default:
        return state
    }
    
}

// ACTION CREATORS
export const setAuthUserDataAC = (email, id, login) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {email, id, login}
    }
}

const loginAC = (id) => {
    return {
        type: LOG_IN,
        id
    }
}

const logoutAC = () => {
    return {
        type: LOG_OUT
    }
}

// THUNKS
export const authMeTC = () => {
    return async (dispatch) => {
        await authAPI.authMe()
            .then(data => {
                if(data.resultCode === 0) {
                    let {email, id, login} = data.data
                    dispatch(setAuthUserDataAC(email, id, login))
                    let thunk = setUserProfileTC(id)
                    dispatch(thunk)
                }
            })
    }
}

export const loginTC = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,password,rememberMe)
                .then((data) => {
                    if(data.resultCode === 0) {
                        dispatch(loginAC(data.data.id))
                    }
                })
    }
}

export default authReducer