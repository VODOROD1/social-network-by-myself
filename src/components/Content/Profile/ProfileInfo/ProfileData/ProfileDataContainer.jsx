import React from 'react'
import { connect } from 'react-redux'
import ProfileData from './ProfileData'
import {setProfileDataTC} from '../../../../../redux/reducers/profile-reducer'

const ProfileDataContainer = (props) => {

    const setProfileData = async (data) => {
        console.log('setProfileData1')
        let newObj = createObjOfNewProfile(data)
        let thunk = setProfileDataTC(newObj)
        // let result = await props.setProfileData(thunk)
        console.log('setProfileData2')
        // return result.then((response) => response)
        return await props.setProfileData(thunk)
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