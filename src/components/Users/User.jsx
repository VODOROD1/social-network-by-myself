import React from 'react'
import styles from './Users.module.css'
import {NavLink} from 'react-router-dom'

const User = (props) => {

  const follow = (e) => {
    props.follow(props.userData.id)
  }

  const unfollow = (e) => {
    props.unfollow(props.userData.id)
  }

  return (
    <div className={styles.userWrapper}>
      <div className={styles.avaButtonWrapper}>
        <div className={styles.userAvaWrapper}>
          <NavLink to={`/profile/${props.userData.id}`}>
            <img src='https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg' 
                alt='ava' className={styles.userAva}/>
          </NavLink>
        </div>
        {props.userData.followed ? 
              <button className={styles.unfollowButton} onClick={unfollow} 
                    disabled={props.arrFollowingInProgress.some(id => id === props.userData.id)}>Unfollow</button> :
              <button className={styles.followButton} onClick={follow} 
                    disabled={props.arrFollowingInProgress.some(id => id === props.userData.id)}>Follow</button>
        }
      </div>
      <div className={styles.userDataWrapper}>
        <p className={styles.userData}><span>{props.userData.name}</span></p>
        <p className={styles.userData}><span>{props.userData.status}</span></p>
        {/* <p className={styles.userData}><span>{props.userData.name}</span><span>{props.userData.location.country}</span></p>
        <p className={styles.userData}><span>{props.userData.status}</span><span>{props.userData.location.city}</span></p> */}
      </div>
    </div>
  )
}

export default User;