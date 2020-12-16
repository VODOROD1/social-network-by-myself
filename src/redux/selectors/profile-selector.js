
export const getProfile = (state) => {
    return state.stateOfProfilePage.profile
}

export const getIsFetching = (state) => {
    return state.stateOfProfilePage.isFetching
}

export const getPosts = (state) => {
    return state.stateOfProfilePage.posts
}