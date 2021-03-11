import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import Preloader from '../../common/Preloader/Preloader'
import withAuthRedirectHOC from '../../HOC/withAuthRedirectHOC'
import {getProfile,getIsFetching} from '../../redux/selectors/profile-selector'
import {getMyId} from '../../redux/selectors/auth-selector'
import Profile from './Profile'
import {setUserTC} from '../../redux/profile-reducer'
import {setPhotoTC} from '../../redux/profile-reducer'


const ProfileContainer = (props) => {
  
  const [userId,setUserId] = React.useState()

  React.useEffect(() => {
    let tempUserId
    var isnum = /^\d+$/.test(props.match.params.userId); // делаем проверку на число
      if(isnum) { 
        tempUserId = props.match.params.userId
        setUserId(props.match.params.userId)
      } else {
        tempUserId = props.myId
        setUserId(props.myId)
      }
      let thunk = setUserTC(tempUserId)
      props.setUserProfile(thunk)
  }, [props.match.params.userId])

  const setPhoto = (photo) => {
    let thunk = setPhotoTC(photo)
    props.setPhoto(thunk)
  }

  return (
    <>
      {
        (props.isFetching) ? <Preloader /> : <Profile profile={props.profile} userId={userId} setPhoto={setPhoto}/>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    isFetching: getIsFetching(state),
    myId: getMyId(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (thunk) => {
      dispatch(thunk)
    },
    setPhoto: (thunk) => {
      dispatch(thunk)
    } 
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter,           // подключаем библиотеку для доступа к поисковой строке
  withAuthRedirectHOC,
)(ProfileContainer)

