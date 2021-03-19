import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {logoutTC} from '../../redux/reducers/auth-reducer'

const HeaderContainer = (props) => {

    const logout = (e) => {
        let thunk = logoutTC()
        props.logout(thunk)
    }

    return (
        <Header {...props} logout={logout}/>
    )
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        id: state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        logout: (thunk) => {
            dispatch(thunk)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(HeaderContainer)