import React from "react";
import SidebarItem from './SidebarItem'
import styles from './Sidebar.module.css'

const Sidebar = (props) => {

    const getKey = (str) => {
        let key = 0
        for(let i=0; i<str.length; i++) {
            let currentCode = str.charCodeAt(str[i])
            key += str.charCodeAt(str[i])
            continue
        }
        let stringKey = key.toString() 
        return key.toString()
    }

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