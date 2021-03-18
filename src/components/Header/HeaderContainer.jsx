import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {authMeTC} from '../../redux/reducers/auth-reducer'

const HeaderContainer = (props) => {

    // const setAuthUserData = (email, id, login) => {
    //     let action = setAuthUserDataAC(email, id, login)
    //     props.setAuthUserData(action)
    // }

    // const setMyProfile = (userId) => {
    //     let thunk = setUserProfileTC(userId)
    //     props.setMyProfile(thunk)
    // }

    React.useEffect(() => { // Запрос на взятие аутентификационных данных
        let thunk = authMeTC()
        props.authMe(thunk)
    },[])

    return (
        <Header {...props}/>
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(HeaderContainer)