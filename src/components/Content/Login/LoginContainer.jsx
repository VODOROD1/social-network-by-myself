import React from 'react'
import Login from './Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {loginTC} from '../../../redux/reducers/auth-reducer'

const LoginContainer = (props) => {

    const invokeLogin = (formData) => {
        let thunk = loginTC()
        props.invokeLogin(thunk)
    }

    return (
        <Login invokeLogin={invokeLogin}/>
    )
}

const mapStateToProps = (state) => {
    return {

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