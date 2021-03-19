import React from "react";
import SidebarItem from './SidebarItem'
import styles from './Sidebar.module.css'
import getKey from '../../../common/key/createKey'

const Sidebar = (props) => {

    let reactElems = props.friends.map((elem) => {
        return (
            <SidebarItem data={elem} className={styles.item} key={getKey(elem.name)}/>
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