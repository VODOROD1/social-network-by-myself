import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC,unfollowAC,setUsersAC} from '../../redux/users-reducer';

const UsersContainer = (props) => {

  const follow = (userId) => {
    let action = followAC(userId)
    props.follow(action)
  }

  const unfollow = (userId) => {
    let action = unfollowAC(userId)
    props.unfollow(action)
  }

  const setUsers = (users) => {
    let action = setUsersAC(users)
    props.setUsers(action)
  }

  return (
    <Users follow={follow} unfollow={unfollow} setUsers={setUsers} users={props.users}/>
  )
}

const mapStateToProps = (state) => {
  
  return {
    users: state.stateOfUsersPage.users,
  }
}
debugger;
const mapDispatchToProps = (dispatch) => {
  return {
    follow: function(action) {
      dispatch(action)
    },
    unfollow: function(action) {
      dispatch(action)
    },
    setUsers: function(action) {
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)