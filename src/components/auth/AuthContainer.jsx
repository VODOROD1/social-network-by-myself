import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {loginTC,exitAC} from '../../redux/auth-reducer'
import Auth from './Auth'

const AuthContainer = (props) => {

  const loginHandler = (emailValue,passwordValue,checkBox) => {
    let thunk = loginTC(emailValue,passwordValue,checkBox)
    props.login(thunk)
  }

  if(props.isAuth) {
    return <Redirect to={'/dialogs'}/>
  }

  return (
    <Auth loginHandler={loginHandler}/>
  )
}

const mapStateToProps = (state) => {
 return {
    isAuth: state.stateOfAuth.isAuth
 }
}

const mapDispatchToProp = (dispatch) => {
  return {
    login: function(thunk) {
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(AuthContainer)