import React from 'react'
import styles from './ProfileData.module.css'
import {Field,reduxForm} from 'redux-form'
// import {Input, TextArea} from './CustomField'
import {Input, Textarea} from '../../../../../common/FormsControls/FormsControls'

const ProfileData = (props) => {
    // const [editMode, setEditMode] = React.useState(false)

    const editModeOn = () => {
        props.editModeOn()
    }

    const editModeOff = () => {
        props.editModeOff()
    }

    // const saveData = (data) => {
    //     let result = props.setProfileData(data)
    //     return result.then((response) => response)   // возвращается промис после установки данных
    // }

    // const saveData = async (data) => {
    //     let result = await props.setProfileData(data)
    //     return result
    // }

    // const handleSubmit = (profileData) => {
    //     saveData(profileData).then(() => {
    //         editModeOff()
    //     })
    // }
        // console.log('handleSubmit2')
        //     if(result) {
        //         console.log('editModeOff')
        //         editModeOff()
        //     } else {
        //         console.log(result)
        //     }

        // result.then((flag) => {
        //     if(flag) {
        //         console.log('editModeOff')
        //         editModeOff()
        //     }
        // }, (errors) => {
        //     console.log(errors)
        // })


    return (
        <>
        {
        props.editMode ?
        <ProfileDataReduxForm onSubmit={props.onSubmit} editModeOff={editModeOff} 
                initialValues={{...props.profile,...props.profile.contacts}} profile={props.profile}/> :
        <ProfileDataStatic editModeOn={editModeOn} profile={props.profile} isOwner={props.isOwner}/>
        }
        </>
    )
}

const ProfileDataForm = (props) => {

    let contactsFormsArr = React.useMemo(() => {
        let localArr = []
        for(let i=0; i<Object.keys(props.profile.contacts).length; i++) {
            localArr.push(
                {
                    contactName: Object.keys(props.profile.contacts)[i], 
                    contactValue: Object.values(props.profile.contacts)[i]
                }
            )
        }
        return localArr
    },[props.profile.contacts])

    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <button>Save</button>   <button onCLick={props.editModeOff}>Cancel</button>
            </p>
            {
                props.error ?
                <div className={styles.commonError}>
                    {props.error}
                </div> :
                null
            }
            <div>
                <b>Full name:</b>
                <p><Field component={Input} type={'text'} 
                        name={'fullName'}/></p>
            </div>
            <div>
                <b>About Me</b>
                <p><Field component={Input} type={'text'}
                        name={'aboutMe'}/></p>
            </div>
            <div>
                <b>Looking for a job: </b>
                <p><Field component={Input} type={'checkbox'}
                        name={'lookingForAJob'}/></p>
            </div>
            <div>
                <b>Looking for a job description: </b>
                <p><Field component={Textarea} name={'lookingForAJobDescription'}
                        /></p>
            </div>
            <div>
                <b>Contacts</b>
                <div>
                {contactsFormsArr.map((contact) => {
                    return (
                        <p>
                        <div className={styles.nameOfContact}>{contact.contactName}</div> 
                        <Field component={Input} type={'text'} name={contact.contactName}/>
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
