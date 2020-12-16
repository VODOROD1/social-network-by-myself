import {authMeTC} from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false
}

const appReducer = (state=initialState,action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return {...state}
    }
}

const setInitializedAC = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const setInitializedTC = () => {
    return (dispatch) => {
        let promise1 = dispatch(authMeTC())
        Promise.all([promise1])
               .then(() => {
                   dispatch(setInitializedAC())
               })
    }
}

export default appReducer