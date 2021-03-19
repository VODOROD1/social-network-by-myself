import {authMeTC} from './auth-reducer'

const SET_INITIALIZE = 'SET_INITIALIZE'

const initialState = {
    initialized: false
}

const appReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZE:
            return    {   ...state,
                initialized: action.initialized
            }
        default: 
            return state;
    }
}

// ACTION CREATORS
const setInitializeAC = (initialized) => {
    return {
        type: SET_INITIALIZE,
        initialized
    }
}

// THUNK CREATORS
export const setInitializeTC = () => {
    return (dispatch) => {
        let thunk = authMeTC()        // Запрос на взятие аутентификационных данных
        dispatch(thunk).then((data) => {
            let initialized = true
            dispatch(setInitializeAC(initialized))
        })
    }
}

export default appReducer