import  React from 'react';
import styles from './ProfileInfo.module.css';
import Status from './status/Status'

const ProfileInfo = (props) => {

  const setPhoto = (e) => {
    if(e.target.files.length) {
      props.setPhoto(e.target.files[0])
    }
  }
  return (
    <div>
      {
        props.profile.photos.large ?
        (<div>
          <img src={props.profile.photos.large} 
              alt='здесь расположена аватарка' className={styles.ava}/>
        </div>) : 
        (<div>
          <img src='https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg'
              alt='здесь расположена аватарка' className={styles.ava}/>
          <br></br>
          <input type='file' onChange={setPhoto}/>
        </div>)
      }
      
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