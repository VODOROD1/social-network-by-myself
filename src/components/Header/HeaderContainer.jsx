import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {authMeTC} from '../../redux/reducers/auth-reducer'
import {logoutTC} from '../../redux/reducers/auth-reducer'

const HeaderContainer = (props) => {

    React.useEffect(() => { // Запрос на взятие аутентификационных данных
        let thunk = authMeTC()
        props.authMe(thunk)
    },[])

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
        authMe: (thunk) => {
            dispatch(thunk)
        },
        logout: (thunk) => {
            dispatch(thunk)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(HeaderContainer)