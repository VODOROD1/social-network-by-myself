import React from 'react'
import {connect} from 'react-redux'
import withAuthRedirectHOC from '../../HOC/withAuthRedirectHOC'
import {compose} from 'redux'
import Dialogs from './Dialogs';
import {updateNewMessageTextAC, addNewMessageAC} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
  debugger;
  const addNewMessage = (e) => {
    let action = addNewMessageAC();
    props.addNewMessage(action)
  }
  const updateNewMessageText = (newMessage) => {
    let action = updateNewMessageTextAC(newMessage)
    props.updateNewMessageText(action)
  }
  debugger;
  return (
    <Dialogs  dialogItems={props.dialogItems} 
              messages={props.messages}
              newMessageText={props.newMessageText}
              addNewMessage = {addNewMessage} 
              updateNewMessageText={updateNewMessageText}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    dialogItems: state.stateOfDialogsPage.dialogItems,
    messages: state.stateOfDialogsPage.messages,
    newMessageText: state.stateOfDialogsPage.newMessageText,
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    addNewMessage: function(action) {
      dispatch(action)
    },
    updateNewMessageText: function(action) {
      dispatch(action)
    },
  }
}

// export default connect(mapStateToProps,mapDispatchToProp)(DialogsContainer)

export default compose(
  connect(mapStateToProps,mapDispatchToProp),
  withAuthRedirectHOC
)(DialogsContainer)