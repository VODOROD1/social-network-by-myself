import React from 'react'
import Login from './Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {loginTC} from '../../../redux/reducers/auth-reducer'

const LoginContainer = (props) => {

    const invokeLogin = ({email,password,rememberMe,captcha}) => {
        let thunk = loginTC(email,password,rememberMe,captcha)
        props.invokeLogin(thunk)
    }

    return (
        <Login invokeLogin={invokeLogin} captchaURL={props.captchaURL}/>
    )
}

const mapStateToProps = (state) => {
    return {
        captchaURL: state.auth.captchaURL
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        invokeLogin: (thunk) => {dispatch(thunk)}
    }
}

export default compose(
        connect(mapStateToProps,mapDispatchToProp)
)(LoginContainer)