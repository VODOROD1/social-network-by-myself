import React from 'react'
import styles from './ProfileData.module.css'

const ProfileData = (props) => {
    const [editMode, setEditMode] = React.useState(false)

    const mainFormRef = React.createRef()
    const contactsFormRef = React.createRef()

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)
    }

    const saveData = () => {
        props.setProfileData(mainFormRef,contactsFormRef)
    }

    return (
        <>
        {
        editMode ?
        <form ref={mainFormRef}>
            <p><input type={'submit'} value={'save'} onClick={() => {editModeOff();saveData()}}/></p>
            <div>
                <b>Full name:</b>
                <p><input type='text' value={props.profile.fullName} name={'fullName'}/></p>
            </div>
            <div>
                <b>Looking for a job: </b> 
                <p><input type={'checkbox'} value={props.profile.lookingForAJob} name={'lookingForAJob'}/></p>
            </div>
            <div>
                <b>Looking for a job description: </b>
                <p>
                    <textarea name='lookingForAJobDescription'>
                        {props.profile.lookingForAJobDescription}
                    </textarea>
                </p>
            </div>
        </form> :
        <div>
            {props.isOwner && <p><input type={'button'} value={'edit'} onClick={editModeOn}/></p>}
            <div>
                <b>Full name:</b>
                <p>{props.profile.fullName}</p>                
            </div>
            <div>
                <b>Looking for a job: </b> 
                <p>{props.profile.lookingForAJob}</p>
            </div>
            <div>
                <b>Looking for a job description: </b>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
        }
        <div>
            <b>Contacts</b>
            <Contacts contacts={props.profile.contacts} 
                        editMode={editMode} 
                        contactsFormRef={contactsFormRef}
            />
        </div>
        </>
    )
}

const Contacts = ({contacts,editMode,contactsFormRef}) => {
    let contactsArr = []
    let contactsFormsArr = []
    for(let i=0; i<Object.keys(contacts).length; i++) {
        if(Object.values(contacts)[i]) {
            contactsArr.push({contactName: Object.keys(contacts)[i], contactValue: Object.values(contacts)[i]})
        }
    }
    for(let i=0; i<Object.keys(contacts).length; i++) {
        let keys = Object.keys(contacts)[i]
        let values = Object.values(contacts)[i]
        let currentElem = {contactName: Object.keys(contacts)[i], contactValue: Object.values(contacts)[i]}
        contactsFormsArr.push({contactName: Object.keys(contacts)[i], contactValue: Object.values(contacts)[i]})
    }
    return (
      <>
        { 
          editMode ?
          <form ref={contactsFormRef}>
          {contactsFormsArr.map((contact) => {
            return (
                <p>
                   <div className={styles.nameOfContact}>{contact.contactName}</div> : 
                   <input type={'text'} value={contact.contactValue} name={contact.contactName}/>
                </p>
            )
          })}
          </form> :
          <div>
          {contactsArr.map((contact) => {
            return (
                <p>
                    <div className={styles.nameOfContact}>{contact.contactName}</div> : {contact.contactValue}
                </p>)
          })} 
          </div>
        }
      </>
    )
}

export default ProfileData

            {/* <div>
                <b>My professional skills:</b>
                <br></br>
                <textarea>
                    {props.profile.}
                </textarea>
            </div> */}
            {/* <div>
                <b>About me:</b>
                <br></br>
                {props.profile.aboutMe}
            </div> */}

                {/* <p>facebook - {props.profile.contacts.facebook}</p>
                <p>twitter - {props.profile.contacts.twitter}</p>
                <p>github - {props.profile.contacts.github}</p> */}