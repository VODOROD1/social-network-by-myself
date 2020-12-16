
export const getMyId = (state) => {
    return state.stateOfAuth.data.id
}

export const getIsAuthBoolVal = (state) => {
    return state.stateOfAuth.isAuth
}

export const getCurrentPage = (state) => {
    return state.stateOfAuth.currentPage
}

export const getLoginName = (state) => {
    return state.stateOfAuth.data.login
}