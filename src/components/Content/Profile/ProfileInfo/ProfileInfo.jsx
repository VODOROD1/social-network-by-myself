import  React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus'

const ProfileInfo = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.profile.photos.large ? 
                props.profile.photos.large :
            'https://wallbox.ru/wallpapers/main2/201742/zakat-more-plaz-tropiki12.jpg'} 
            alt='здесь расположена аватарка' className={styles.ava}/>
      <div className={styles.descriptionBlock}>
        {props.profile.fullName}
        <br></br>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        {props.profile.lookingForAJobDescription}
        <br></br>
        {props.profile.aboutMe}
        <br></br>
        <div>
          <b>Contacts</b>
          <p>facebook - {props.profile.contacts.facebook}</p>
          <p>twitter - {props.profile.contacts.twitter}</p>
          <p>github - {props.profile.contacts.github}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;