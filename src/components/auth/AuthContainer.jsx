import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {loginTC} from '../../redux/auth-reducer'
import {getIsAuthBoolVal,getCurrentPage} from '../../redux/selectors/auth-selector'
import Auth from './Auth'

const AuthContainer = (props) => {

  const loginHandler = (emailValue,passwordValue,checkBox) => {
    let thunk = loginTC(emailValue,passwordValue,checkBox)
    props.login(thunk)
  }
//
  // React.useEffect(() => {
  //   debugger;
  // },[props.isAuth])

  return (
    // props.isAuth ? <Redirect to={'/dialogs'}/> : <Auth loginHandler={loginHandler}/>
    props.isAuth ? <Redirect to={props.currentPage}/> : <Auth loginHandler={loginHandler}/>
  )
}

const mapStateToProps = (state) => {
 return {
    isAuth: getIsAuthBoolVal(state),
    currentPage: getCurrentPage(state)
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