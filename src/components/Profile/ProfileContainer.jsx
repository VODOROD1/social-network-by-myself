import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import withAuthRedirectHOC from '../../HOC/withAuthRedirectHOC'
import Profile from './Profile'
import {setUserTC} from '../../redux/profile-reducer'
import Preloader from '../../common/Preloader/Preloader'

const ProfileContainer = (props) => {
  const [userId,setUserId] = React.useState()
  React.useEffect(() => {
    let tempUserId
      if(!props.match.params.userId) {
        tempUserId = 2
        setUserId(2)
      } else {
        tempUserId = props.match.params.userId
        setUserId(props.match.params.userId)
      }
      let thunk = setUserTC(tempUserId)
      props.setUserProfile(thunk)
  }, [props.match.params.userId])

  // React.useEffect(() => {
  //   debugger;
  //   console.log(props.isFetching)
  // },[props.isFetching])

  return (
    <>
      {
        (props.isFetching) ? <Preloader /> : <Profile profile={props.profile} userId={userId}/>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.stateOfProfilePage.profile,
    isFetching: state.stateOfProfilePage.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (thunk) => {
      dispatch(thunk)
    } 
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter,
  withAuthRedirectHOC,
)(ProfileContainer)

