import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {authMeTC} from '../../redux/auth-reducer'
import {logoutTC} from '../../redux/auth-reducer'

const HeaderContainer = (props) => {

  React.useEffect(() => {
    let thunk = authMeTC()
    props.setAuthData(thunk)
  },[])

  const logout = () => {
    let thunk = logoutTC()
    props.logout(thunk)
  }
  
  return (
    props.isAuth !== undefined ? 
    <Header isAuth={props.isAuth} loginName={props.loginName} logout={logout}/> : null
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.stateOfAuth.isAuth,
    loginName: state.stateOfAuth.data.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthData: function(thunk) {
      dispatch(thunk)
    },
    logout: function(thunk) {
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)