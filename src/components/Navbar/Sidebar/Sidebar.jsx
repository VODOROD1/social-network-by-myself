import React from "react";
import SidebarItem from './SidebarItem'
import styles from './Sidebar.module.css'

const Sidebar = (props) => {

    let reactElems = props.friends.map((elem) => {
        return (
            <SidebarItem data={elem} className={styles.item}/>
        )
    })

    return (
        <div className={styles.wrapper}>
            <h1>Friends</h1>
            <div className={styles.items}>
                {reactElems}
            </div>
        </div>
    )
}

export default Sidebar