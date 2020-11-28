import  React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <img src='https://wallbox.ru/wallpapers/main2/201742/zakat-more-plaz-tropiki12.jpg' 
            alt='здесь расположена аватарка' className={styles.ava}/>
      <div>
        Login
        <br></br>
        status
        <br></br>
        About me -
        <br></br>
        <b>Contacts</b>
      </div>
    </div>
  )
}

export default ProfileInfo;