import React from 'react'
import styles from './Status.module.css'
import {connect} from 'react-redux'
import {setStatusTC,updateStatusTC} from '../../../redux/profile-reducer'


const Status = (props) => {
    const [isEditMode, setIsEditMode] = React.useState(false)
    const [newStatus, setNewStatus] = React.useState()

    React.useEffect(() => {
        let thunk = setStatusTC(props.userId)
        props.setStatus(thunk)
    }, [props.userId])

    const offEditMode = (e) => {
        setIsEditMode(false)
        let thunk = updateStatusTC(newStatus)
        props.updateStatus(thunk)
    }

    const onEditMode = (e) => {
        setIsEditMode(true)
        setNewStatus(e.target.value)
    }

    const editStatus = (e) => {
        setNewStatus(e.target.value)
    }

    return (
        <p>
            {isEditMode ? 
                <input onBlur={offEditMode} autoFocus={true} onInput={editStatus} type='text' value={newStatus} /> :
                <span onDoubleClick={onEditMode} className={styles.status}>{props.status}</span>
            }
        </p>
    )
}

const mapStateToProps = (state) => {
    return {
        status: state.stateOfProfilePage.status,
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        setStatus: function(thunk) {
            dispatch(thunk)
        },
        updateStatus: function(thunk) {
            dispatch(thunk)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Status)