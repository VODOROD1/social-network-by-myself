import React from 'react'
import styles from './Profile.module.css'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = React.useState(false)
    const [localStatus, setLocalStatus] = React.useState(props.status ? props.status : 'No status')

    React.useEffect(() => {
        setLocalStatus(props.status)
    },[props.status])

    const changeLocalStatus = (e) => {
        setLocalStatus(e.target.value)
    }

    const editModeON = (e) => {
        setEditMode(true)
    }

    const editModeOFF = (e) => {
        setEditMode(false)
        props.updateStatus(localStatus)
    }

    return (
        <div className={styles.wrapper}> 
        {
            editMode ?
            <input onInput={changeLocalStatus} onBlur={editModeOFF} 
            autoFocus value={localStatus} className={styles.status}/> :
            <span onDoubleClick={editModeON} className={styles.status}>{
                props.status ? props.status : 'No status now'
            }</span>
        }
        </div>
    )
}

export default ProfileStatus