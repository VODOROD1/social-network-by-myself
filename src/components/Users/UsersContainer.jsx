import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import withAuthRedirectHOC from '../../HOC/withAuthRedirectHOC'
import {getUsers,getPagesCount,getCurrentPage,getIsFetchingBoolVal,
        getArrFollowingInProgress} from '../../redux/selectors/users-selector'
import Users from './Users'
import {followTC,unfollowTC,setUsersTC,setTotalCountTC,setCurrentPageAC} from '../../redux/users-reducer'
import Preloader from '../../common/Preloader/Preloader'

const UsersContainer = (props) => {

  const setUsers = (currentPage) => {     // получаем профили пользователей из диапазона
    let thunk = setUsersTC(currentPage)
    props.setUsers(thunk)
  }

  const setTotalCount = () => {           // получаем общее количество пользователей 
    let thunk = setTotalCountTC()
    props.setTotalCount(thunk)
  }

  const follow = (userId) => {
    let thunk = followTC(userId)
    props.follow(thunk)
  }

  const unfollow = (userId) => {
    let thunk = unfollowTC(userId)
    props.unfollow(thunk)
  }

  const selectPage = (selectedPage) => {
    let action = setCurrentPageAC(selectedPage)
    props.setCurrentPage(action)
  }

  return (
    <>
      { props.isFetching ? <Preloader /> : null }
        <Users users={props.users} follow={follow} unfollow={unfollow} setUsers={setUsers} 
                setTotalCount={setTotalCount} selectPage={selectPage} pagesCount={props.pagesCount} 
                currentPage={props.currentPage} arrFollowingInProgress={props.arrFollowingInProgress}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pagesCount: getPagesCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetchingBoolVal(state),
    arrFollowingInProgress: getArrFollowingInProgress(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: function(thunk) {
      dispatch(thunk)
    },
    unfollow: function(thunk) {
      dispatch(thunk)
    },
    setUsers: function(thunk) {
      dispatch(thunk)
    },
    setTotalCount: function(thunk) {
      dispatch(thunk)
    },
    setCurrentPage: function(action) {
      dispatch(action)
    },
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirectHOC
)(UsersContainer)