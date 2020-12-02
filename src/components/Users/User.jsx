import React from 'react'
import styles from './Users.module.css'

const User = (props) => {
  const follow = (e) => {
    props.follow(props.userData.id)
  }

  return (
    <div className={styles.userWrapper}>
      <div className={styles.avaButtonWrapper}>
        <div className={styles.userAvaWrapper}>
          <img src='https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg' 
              alt='ava' className={styles.userAva}/>
        </div>
        <button onClick={follow}>{props.userData.followed ? 'Follow' : 'Unfollow'}</button>
      </div>
      <div className={styles.userDataWrapper}>
        <p className={styles.userData}><span>{props.userData.fullName}</span><span>{props.userData.location.country}</span></p>
        <p className={styles.userData}><span>{props.userData.status}</span><span>{props.userData.location.city}</span></p>
      </div>
    </div>
  )
}

export default User;