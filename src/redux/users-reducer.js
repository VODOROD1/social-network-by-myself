import {userAPI} from '../DAL/api'

const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'
const SET_USERS='SET_USERS'
const SET_TOTAL_COUNT='SET_TOTAL_COUNT'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'
const ADD_FOLLOWING_IN_PROGRESS = 'ADD_FOLLOWING_IN_PROGRESS'
const REMOVE_FOLLOWING_IN_PROGRESS = 'REMOVE_FOLLOWING_IN_PROGRESS'

let initialState = {
  users: [],
  totalCount: 0,
  pagesCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state=initialState,action) => {
  switch(action.type) {
    case FOLLOW: {
      let currentIndex;                                   // индекс изменяемого элемента
      let tempObj = state.users.filter((user,index) => {  // массив, состоящий из одного элемента, который является
        if(user.id === action.id){                        // новым объектом юзера
          currentIndex = index
          return true
        }
      })
      let newObj = {...tempObj[0], followed: true}
      let tempArr = [...state.users]
      tempArr.splice(currentIndex,1,newObj)
      return {...state,users: [...tempArr]}
    }
    case UNFOLLOW: {
      let currentIndex;                                   // индекс изменяемого элемента
      let tempObj = state.users.filter((user,index) => {  // массив, состоящий из одного элемента, который является
        if(user.id === action.id){                        // новым объектом юзера
          currentIndex = index
          return true
        }
      })
      let newObj = {...tempObj[0], followed: false}
      let tempArr = [...state.users]
      tempArr.splice(currentIndex,1,newObj)
      return {...state,users: [...tempArr]}
    }
    case SET_USERS: {
      return {...state, users: [...action.users]}
    }
    case SET_TOTAL_COUNT: {
      let pagesCount = 0
      if(action.totalCount%10 === 0){
        pagesCount = action.totalCount/10
      } else {pagesCount = action.totalCount/10 - action.totalCount%10/10 + 1}
      return {...state, totalCount: action.totalCount, pagesCount: pagesCount}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.selectedPage}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case ADD_FOLLOWING_IN_PROGRESS: {
      return {...state, followingInProgress: [...state.followingInProgress, action.userId]}
    }
    case REMOVE_FOLLOWING_IN_PROGRESS: {
      let arr = state.followingInProgress.filter(id => id !== action.userId)
      return {...state, followingInProgress: [...arr]}
    }
    default:
      return state
  }
}

// далее идут action creators
const followAC = (userId) => {
  return {
    type: FOLLOW,
    id: userId
  }
}

const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    id: userId
  }
}

const setUsersAC = (newUsers) => {
  return {
    type: SET_USERS,
    users: newUsers
  }
}

const setTotalCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  }
}

export const setCurrentPageAC = (selectedPage) => {
  return {
    type: SET_CURRENT_PAGE,
    selectedPage
  }
}

const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

const addFollowingInProgressAC = (userId) => {
  return {
    type: ADD_FOLLOWING_IN_PROGRESS,
    userId
  }
}

const removeFollowingInProgressAC = (userId) => {
  return {
    type: REMOVE_FOLLOWING_IN_PROGRESS,
    userId
  }
}
// далее идут thunk creators
export const setUsersTC = (currentPage) => {
  // newUsers
  return  (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    userAPI.getUsers(currentPage).then(data => {
        let action1 = setUsersAC(data.items)
        dispatch(action1)
        let action2 = toggleIsFetchingAC(false)
        dispatch(action2)
    })
  }
}

export const followTC = (userId) => {
  return (dispatch) => {
    dispatch(addFollowingInProgressAC(userId))
    userAPI.follow(userId).then((data) => {
        if(data.resultCode === 0) {
          let action = followAC(userId)
          dispatch(action)
          dispatch(removeFollowingInProgressAC(userId))
        }
    })
  }
}

export const unfollowTC = (userId) => {
  return (dispatch) => {
    dispatch(addFollowingInProgressAC(userId))
    userAPI.unfollow(userId).then((data) => {
        if(data.resultCode === 0) {
          let action = unfollowAC(userId)
          dispatch(action)
          dispatch(removeFollowingInProgressAC(userId))
        }
    })
  }
}

export const setTotalCountTC = () => {
  return (dispatch) => {
      userAPI.getTotalCount().then((data) => {
        let action = setTotalCountAC(data.totalCount)
        dispatch(action)
      })
  }
}

export default usersReducer