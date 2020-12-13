import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {authLoginAC,exitAC} from '../../redux/auth-reducer'
import Auth from './Auth'

const AuthContainer = (props) => {

  const loginHandler = (emailValue,passwordValue) => {
    axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {
      withCredentials: true,
      email: emailValue,
      password: passwordValue
    }).then(response => {
      console.log(response.data)
      let action = authLoginAC(response.data)
      props.setAuthData(action)
      
    })
  }

  return (
    <Auth loginHandler={loginHandler}/>
  )
}

const mapStateToProps = (state) => {
 return {

 }
}

const mapDispatchToProp = (dispatch) => {
  return {
    setAuthData: function(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(AuthContainer)