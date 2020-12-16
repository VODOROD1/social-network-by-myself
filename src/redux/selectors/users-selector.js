export const getUsers = (state) => {
    return state.stateOfUsersPage.users
}

export const getPagesCount = (state) => {
    return state.stateOfUsersPage.pagesCount
}

export const getCurrentPage = (state) => {
    return state.stateOfUsersPage.currentPage
}

export const getIsFetchingBoolVal = (state) => {
    return state.stateOfUsersPage.isFetching
}

export const getArrFollowingInProgress = (state) => {
    return state.stateOfUsersPage.followingInProgress
}