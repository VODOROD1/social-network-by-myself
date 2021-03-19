import React from 'react'
import Dialogs from './Dialogs'
import {addNewMessageAC} from '../../../redux/reducers/dialogs-reducer';
import {connect} from 'react-redux'
import redirectHOC from '../../../common/HOC/redirectHOC'
import {compose} from 'redux'

const DialogsContainer = (props) => {

    const addNewMessage = (formData) => {
        let action = addNewMessageAC(formData.newDialogField);
        props.addNewMessage(action)
    }

    return (
            <Dialogs 
                addNewMessage={addNewMessage} 
                dialogItems={props.dialogItems}
                messages={props.messages}
            /> 
    )
}

const mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogs.dialogItems,
        messages: state.dialogs.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (action) => {
            dispatch(action)
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    redirectHOC     // Перенаправление на стр логинизации
)(DialogsContainer)
// export default connect(mapStateToProps,mapDispatchToProps)(redirectHOC(DialogsContainer))