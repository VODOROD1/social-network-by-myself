import React from 'react'
import Dialogs from './Dialogs'
import {updateNewMessageTextAC, addNewMessageAC} from '../../../redux/reducers/dialogs-reducer';
import {connect} from 'react-redux'
import redirectHOC from '../../../common/HOC/redirectHOC'
import {compose} from 'redux'

const DialogsContainer = (props) => {

    const addNewMessage = (e) => {
        let action = addNewMessageAC();
        props.addNewMessage(action)
    }
    
    const updateNewMessageText = (e) => {
        let action = updateNewMessageTextAC(e.target.value)
        props.updateNewMessageText(action)
    }

    return (
            <Dialogs 
                addNewMessage={addNewMessage} 
                updateNewMessageText={updateNewMessageText}
                dialogItems={props.dialogItems}
                messages={props.messages}
                newMessageText={props.newMessageText}
            /> 
    )
}

const mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogs.dialogItems,
        messages: state.dialogs.messages,
        newMessageText: state.dialogs.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (action) => {
            dispatch(action)
        },
        updateNewMessageText: (action) => {
            dispatch(action)
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    redirectHOC     // Перенаправление на стр логинизации
)(DialogsContainer)
// export default connect(mapStateToProps,mapDispatchToProps)(redirectHOC(DialogsContainer))