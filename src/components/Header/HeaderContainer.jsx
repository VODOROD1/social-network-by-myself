import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import axios from 'axios'
import {authMeAC} from '../../redux/auth-reducer'

const HeaderContainer = (props) => {

  React.useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
              {withCredentials:true} // отправляем куку
            )
         .then(response => {
              let action = authMeAC(response.data.data)
              props.setAuthData(action)
         })
  },[])
  return (
    <Header login={props.login}/>
  )
}

const mapStateToProps = (state) => {
  return {
    login: state.stateOfAuth.data.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthData: function(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)