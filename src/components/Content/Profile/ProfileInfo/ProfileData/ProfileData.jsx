import React from 'react'

const ProfileData = (props) => {
    return (
        <div>
            <div>
                <b>Full name:</b>
                <br></br>
                {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b> 
                <br></br>
                <input type={'checkbox'} value={props.profile.lookingForAJob}/>
            </div>
            <div>
                <b>My professional skills:</b>
                <br></br>
                <textarea>

                </textarea>
            </div>
            <div>
                <b>About me:</b>
                <br></br>
                {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>
                <Contacts contacts={props.profile.contacts} />
                {/* <p>facebook - {props.profile.contacts.facebook}</p>
                <p>twitter - {props.profile.contacts.twitter}</p>
                <p>github - {props.profile.contacts.github}</p> */}
            </div>
        </div>
    )
}

const Contacts = (contacts) => {
    let contactsArr = []
    for(let i=0; i<contacts.length; i++) {
      contactsArr.push({contactName: contacts.keys[i], contactValue: contacts.values[i]})
    }
    return (
      <div>
        {
          contactsArr.map((contact) => {
            return (<p>{contact.contactName}: {contact.contactValue}</p>)
          })
        }
      </div>
    )
}

export default ProfileData