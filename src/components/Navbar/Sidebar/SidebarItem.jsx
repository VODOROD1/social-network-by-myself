import React from 'react'
import styles from './SidebarItem.module.css'

const SidebarItem = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src='https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg' alt='ava'/>
            <span>{props.data.name}</span>
        </div>
    )
}

export default SidebarItem;