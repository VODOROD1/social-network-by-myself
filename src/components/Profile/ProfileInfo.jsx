import  React from 'react';
import styles from './ProfileInfo.module.css';
import Status from './status/Status'

const ProfileInfo = (props) => {
  return (
    <div>
      <img src={props.profile.photos.large} 
            alt='здесь расположена аватарка' className={styles.ava}/>
      <div className={styles.descriptionBlock}>
        Login - {props.profile.fullName}
        <br></br>
        {props.profile.lookingForAJobDescription}
        <Status userId={props.userId}/>
        About me - {props.profile.aboutMe}
        <br></br>
        <b>Contacts: </b>
        <span>{props.profile.contacts.vk}</span>
        <br></br>
        <span>{props.profile.contacts.github}</span>
      </div>
    </div>
  )
}

export default ProfileInfo;