import  React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './Status/ProfileStatus';
import ProfileDataContainer from './ProfileData/ProfileDataContainer'

const ProfileInfo = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.profile.photos.large ? 
                props.profile.photos.large :
            'https://wallbox.ru/wallpapers/main2/201742/zakat-more-plaz-tropiki12.jpg'} 
            alt='здесь расположена аватарка' className={styles.ava}/>
      <br></br>
      {props.isOwner && <input type={'file'} onChange={(e) => props.savePhoto(e.target.files[0])}/>}
      <div className={styles.descriptionBlock}>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        <ProfileDataContainer isOwner={props.isOwner}/>
      </div>
    </div>
  )
}



export default ProfileInfo;