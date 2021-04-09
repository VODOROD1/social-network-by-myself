import React from 'react'
import styles from './ProfileData.module.css'
import {Field,reduxForm} from 'redux-form'

const ProfileData = (props) => {
    const [editMode, setEditMode] = React.useState(false)

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)
    }

    const saveData = (data) => {
        props.setProfileData(data)
    }

    const handleSubmit = (profileData) => {
        editModeOff()
        saveData(profileData)
    }

    return (
        <>
        {
        editMode ?
        <ProfileDataReduxForm onSubmit={handleSubmit} editModeOff={editModeOff} profile={props.profile}/> :
        <ProfileDataStatic editModeOn={editModeOn} profile={props.profile} isOwner={props.isOwner}/>
        }
        </>
    )
}

const ProfileDataForm = (props) => {
    let contactsFormsArr = []
    for(let i=0; i<Object.keys(props.profile.contacts).length; i++) {
        // let keys = Object.keys(contacts)[i]
        // let values = Object.values(contacts)[i]
        // let currentElem = {contactName: Object.keys(contacts)[i], contactValue: Object.values(contacts)[i]}
        contactsFormsArr.push({contactName: Object.keys(props.profile.contacts)[i], contactValue: Object.values(props.profile.contacts)[i]})
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <p><Field component={'input'} type={'submit'} value={'Save'}/>    
                <button onCLick={props.editModeOff}>Cancel</button>
            </p>
            <div>
                <b>Full name:</b>
                <p><Field component={'input'} type={'text'} 
                        value={props.profile.fullName} name={'fullName'}/></p>
            </div>
            <div>
                <b>About Me</b>
                <p><Field component={'input'} type={'text'}
                        value={props.profile.aboutMe} name={'aboutMe'}/></p>
            </div>
            <div>
                <b>Looking for a job: </b> 
                <p><Field component={'input'} type={'checkbox'}
                        value={props.profile.lookingForAJob} name={'lookingForAJob'}/></p>
            </div>
            <div>
                <b>Looking for a job description: </b>
                <p><Field component={'textarea'} name={'lookingForAJobDescription'}
                        value={props.profile.lookingForAJobDescription}/></p>
            </div>
            <div>
                <b>Contacts</b>
                <div>
                {contactsFormsArr.map((contact) => {
                    return (
                        <p>
                        <div className={styles.nameOfContact}>{contact.contactName}</div> : 
                        <Field component={'input'} type={'text'} name={contact.contactName}
                                    value={contact.contactValue}/>
                        </p>
                    )
                })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'ProfileData'})(ProfileDataForm)

const ProfileDataStatic = (props) => {
    
    let contactsArr = []
    for(let i=0; i<Object.keys(props.profile.contacts).length; i++) {
        if(Object.values(props.profile.contacts)[i]) {
            contactsArr.push({contactName: Object.keys(props.profile.contacts)[i], contactValue: Object.values(props.profile.contacts)[i]})
        }
    }

    return (
        <div>
            {props.isOwner && <p><input type={'button'} value={'edit'} onClick={props.editModeOn}/></p>}
            <div>
                <b>Full name:</b>
                <p>{props.profile.fullName}</p>                
            </div>
            <div>
                <b>Looking for a job: </b> 
                <p><input type={'checkbox'} checked={props.profile.lookingForAJob}/></p>
            </div>
            <div>
                <b>Looking for a job description: </b>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
            <div>
                <b>Contacts</b>
                <div>
                {contactsArr.map((contact) => {
                    return (
                        <p>
                            <div className={styles.nameOfContact}>{contact.contactName}</div> : {contact.contactValue}
                        </p>)
                })} 
                </div>
            </div>
        </div>
    )
}

export default ProfileData
