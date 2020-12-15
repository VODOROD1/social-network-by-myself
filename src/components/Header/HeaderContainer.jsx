import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {authMeTC} from '../../redux/auth-reducer'

const HeaderContainer = (props) => {

  React.useEffect(() => {
    let thunk = authMeTC()
    props.setAuthData(thunk)
  },[])
  
  return (
    props.isAuth !== undefined ? <Header isAuth={props.isAuth} login={props.login}/> : null
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.stateOfAuth.isAuth,
    login: state.stateOfAuth.data.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthData: function(thunk) {
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)