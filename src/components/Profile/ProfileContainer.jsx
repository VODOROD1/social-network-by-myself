import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import Profile from './Profile'
import {setUserProfileAC} from '../../redux/profile-reducer'
import Preloader from '../../common/Preloader/Preloader'

const ProfileContainer = (props) => {
  const [isFetching, setIsFetching] = React.useState(true);
  
  React.useEffect(() => {
      setIsFetching(true)
      let userId
      if(!props.match.params.userId) {
        userId = 2
      } else {userId = props.match.params.userId}
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
              let action = setUserProfileAC(response.data)
              props.setUserProfile(action)
              setIsFetching(false)
            })
  }, [props.match.params.userId])

  return (
    <>
      {/* {isFetching ? <Preloader /> : null}
      {props.profile ? <Profile profile={props.profile}/> : null} */}
      {isFetching ? <Preloader /> : <Profile profile={props.profile}/>}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.stateOfProfilePage.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (action) => {
      dispatch(action)
    } 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileContainer))