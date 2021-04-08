import React from 'react'
import { connect } from 'react-redux'
import ProfileData from './ProfileData'
import {setProfileDataTC} from '../../../../../redux/reducers/profile-reducer'

const ProfileDataContainer = (props) => {

    const setProfileData = (data) => {
        let thunk = setProfileDataTC(data)
        props.setProfileData(thunk)
    }

    return (
        <ProfileData profile={props.profile} 
                    setProfileData={setProfileData}
                    isOwner={props.isOwner}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfileData: (thunk) => {
            dispatch(thunk)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDataContainer)