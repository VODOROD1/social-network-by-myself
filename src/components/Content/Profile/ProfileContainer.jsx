import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import Profile from './Profile'
import {updateNewPostTextAC,addNewPostAC,setUserProfileTC,
        getStatusTC,updateStatusTC} from '../../../redux/reducers/profile-reducer';
import Preloader from '../../../common/Preloader/Preloader'
import {Redirect} from 'react-router-dom'
import redirectHOC from '../../../common/HOC/redirectHOC'
import preloaderHOC from '../../../common/HOC/preloaderHOC'

const ProfileContainer = (props) => {

    React.useEffect(() => {
        let userId = null
        let userIdFromURL = props.match.params.userId // берем из URL
        let authId = props.authId

        if(userIdFromURL) {
            userId = userIdFromURL
        } else if(authId) {
            userId = authId
        } else {
            userId = 2
        }
        
        let thunk1 = setUserProfileTC(userId)
        props.setUserProfile(thunk1)
        let thunk2 = getStatusTC(userId)
        props.setStatus(thunk2)     // прокидываем статус с сервера в наш store 
    },[props.authId])

    const addNewPost = (e) => {
        let action = addNewPostAC()
        props.addNewPost(action)
    }

    const updateNewPostText = (e) => {
        let action = updateNewPostTextAC(e.target.value)
        props.updateNewPostText(action)
    }

    const updateStatus = (newStatus) => {
        let thunk = updateStatusTC(newStatus)
        props.updateStatus(thunk)
    }

    return (
        <>
        {
            // props.isAuth ?

            props.profile ? 
            <Profile 
                newPostText={props.newPostText} 
                posts={props.posts}
                profile={props.profile}
                status={props.status}
                addNewPost={addNewPost}
                updateNewPostText={updateNewPostText}
                updateStatus={updateStatus}
            /> :
            <Preloader />
            // :
            // <Redirect to='/login' />
        }
        
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        posts: state.profile.posts,
        profile: state.profile.profile,
        preloaderFlag: !Boolean(state.profile.profile),
        authId: state.auth.id,
        status: state.profile.status
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        addNewPost: (action) => {dispatch(action)},
        updateNewPostText: (action) => {dispatch(action)},
        setUserProfile: (thunk) => {dispatch(thunk)},
        updateStatus: (thunk) => {dispatch(thunk)},
        setStatus: (thunk) => {dispatch(thunk)}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProp),
    redirectHOC,    // Перенаправление на страницу логинизации
    // preloaderHOC,   // Отображение прелоадера
    withRouter      // получение доступа к URL
)(ProfileContainer)
