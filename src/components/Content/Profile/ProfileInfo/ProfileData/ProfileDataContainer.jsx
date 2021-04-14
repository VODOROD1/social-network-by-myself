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
        let response = props.setProfileData(thunk)
        response.then(() => {
            console.log(response)
            editModeOff()
        }, () => {
            console.log(response)
        })
    }

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
        setProfileData: async (thunk) => {
            return await dispatch(thunk)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDataContainer)