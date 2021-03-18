import React from 'react'
import styles from './Aside.module.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const Aside = (props) => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Sidebar friends={props.friends}/>
        </div>
    )
}

export default Aside