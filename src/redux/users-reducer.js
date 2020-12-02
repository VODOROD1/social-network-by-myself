const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'
const SET_USERS='SET_USERS'

let initialState = {}

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
      let newObj = {...tempObj[0], followed: !tempObj[0].followed}
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
      let newObj = {...tempObj[0], unfollowed: !tempObj[0].unfollowed}
      let tempArr = [...state.users]
      tempArr.splice(currentIndex,1,newObj)
      return {...state,users: [...tempArr]}
    }
    case SET_USERS: {
      return {...state, users: [...state.users,...action.users]}
    }
    default:
      return state
  }
}

// далее идут action creators
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    id: userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    id: userId
  }
}

export const setUsersAC = (newUsers) => {
  return {
    type: SET_USERS,
    users: newUsers
  }
}

export default usersReducer