import React from 'react'
import styles from './styles/User.module.css'
import {NavLink} from 'react-router-dom'

const User = (props) => {

    return (
        <div className={styles.wrapper}>
            
            <div className={styles.avaStatus}>
                <div className={styles.avaStatus_wrapper}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img className={styles.avaStatus_ava} alt='ava'
                        src={props.user.photos.small ? props.user.photos.large :
                            'https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg'
                        } />
                    </NavLink>
                    <div className={props.user.followed ?
                        styles.avaStatus_followedFlag__green :
                        styles.avaStatus_followedFlag__red}
                    >
                    </div>
                    {
                      props.user.followed ?  
                            <button className={styles.avaStatus_unfollowButton}
                                    onClick={() => {props.unfollow(props.user.id)}}
                                    disabled={props.followingInProgress.some(id => id === props.user.id)}
                            >UNFOLLOW</button> :
                            <button className={styles.avaStatus_followButton}
                                    onClick={() => {props.follow(props.user.id)}}
                                    disabled={props.followingInProgress.some(id => id === props.user.id)}
                            >FOLLOW</button>
                    }
                </div>
            </div>
            <div className={styles.data}>
                <div className={styles.data_wrapper}>
                    <div className={styles.data_name}>{props.user.name}</div>
                    <div className={styles.data_location}>
                        <p className={styles.data_location_country}>Some Country</p>
                        <p className={styles.data_location_city}>Some City</p>
                    </div>
                </div>
                <div className={styles.data_status}>{props.user.status}</div>
            </div>
        </div>
    )
}

export default User