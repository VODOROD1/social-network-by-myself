import {usersAPI} from '../../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 10,
    isFetching: false,
    followingInProgress: [],
    test: 0
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map((user) => {
                    if(user.id === action.id) {
                        let newUser = {...user, location: {...user.location}}
                        newUser.followed = true
                        return newUser
                    } else {
                        return {...user}
                    }
                })
            }
        case UNFOLLOW:
            return {...state,
                users: state.users.map((user) => {
                    if(user.id === action.id) {
                        let newUser = {...user,location: {...user.location}}
                        newUser.followed = false
                        return newUser
                    } else {
                        return {...user}
                    }
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching ? 
                [...state.followingInProgress, action.userId] :
                [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        case 'TEST_ACTION':
            return {...state}
        default:
            return state
    }
}

// ACTION CREATORS
export const followAC = (id) => {
    return {
        type: FOLLOW,
        id
    }
}
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsFollowingProgressAC = (isFetching,userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

// THUNKS
export const setUsersTC = (pageSize,currentPage,totalUsersCount) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))
        usersAPI.getUsers(pageSize,currentPage)     // Получаем пользователей с сервера
            .then(data => {
                dispatch(setUsersAC(data.items))    // Прокидываем в store массив юзеров                  
                if(totalUsersCount === 0) {
                    dispatch(setTotalUsersCountAC(data.totalCount)) // Прокидываем в store общее количество юзеров
                }
                dispatch(toggleIsFetchingAC(false))
            })
    }
}

export const followTC = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true,id))
        usersAPI.follow(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(toggleIsFollowingProgressAC(false,id))
            })
    }
}

export const unfollowTC = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true,id))
        usersAPI.unfollow(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unfollowAC(id))
                }
                dispatch(toggleIsFollowingProgressAC(false,id))
            })
    }
}

export default usersReducer









// Старые данные
// let newUsers = [
//     {id: 1, photoURL: '', followed: false, fullname: 'Oleg', status: 'Status of Oleg', location: {city: 'New York', country: 'USA'}},
//     {id: 2, photoURL: '', followed: true, fullname: 'Alex', status: 'Status of Alex', location: {city: 'Saint Petersburg', country: 'Russia'}},
//     {id: 3, photoURL: '', followed: false, fullname: 'Valeria', status: 'Status of Valeria', location: {city: 'Hong Kong', country: 'China'}},
//     {id: 4, photoURL: '', followed: true, fullname: 'Daria', status: 'Status of Daria', location: {city: 'London', country: 'England'}}
// ]