import React from 'react'
import { connect } from 'react-redux'
import ProfileData from './ProfileData'
import {setProfileDataTC} from '../../../../../redux/reducers/profile-reducer'

const ProfileDataContainer = (props) => {

    const [editMode, setEditMode] = React.useState(false)

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)
    }

    const onSubmit = (data) => {
        let newObj = createObjOfNewProfile(data)
        let thunk = setProfileDataTC(newObj)
        props.setProfileData(thunk).then((response) => {
            editModeOff()
        })
    }
        // let result = await props.setProfileData(thunk)
        // console.log('setProfileData2')
        // return result
        // return result.then((response) => response)
        // return props.setProfileData(thunk)

    const createObjOfNewProfile = (data) => {
        let newObj = {
                userId:                     props.profile.userId,
                aboutMe:                    data.aboutMe,
                lookingForAJob:             data.lookingForAJob,
                lookingForAJobDescription:  data.lookingForAJobDescription,
                fullName:                   data.fullName,
                contacts: {
                    github:                 data.github,
                    vk:                     data.vk,
                    facebook:               data.facebook,
                    instagram:              data.instagram,
                    twitter:                data.twitter,
                    website:                data.website,
                    youtube:                data.youtube,
                    mainLink:               data.mainLink,
                },
                photos: {
                    large: props.profile.photos.large
                }
        }
        return newObj
    }

    return (
        <ProfileData profile={props.profile} 
                    onSubmit={onSubmit}
                    isOwner={props.isOwner}
                    editMode={editMode}
                    editModeOn={editModeOn}
                    editModeOff={editModeOff}
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