import React from 'react'
import { connect } from 'react-redux'
import ProfileData from './ProfileData'

const ProfileDataContainer = (props) => {
    return (
        <ProfileData profile={props.profile}/>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDataContainer)