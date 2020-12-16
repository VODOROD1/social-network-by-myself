import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {logoutTC} from '../../redux/auth-reducer'
import {getIsAuthBoolVal,getLoginName} from '../../redux/selectors/auth-selector'

const HeaderContainer = (props) => {

  const logout = () => {
    let thunk = logoutTC()
    props.logout(thunk)
  }
  
  return (
    <Header isAuth={props.isAuth} loginName={props.loginName} logout={logout}/>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthBoolVal(state),
    loginName: getLoginName(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: function(thunk) {
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)