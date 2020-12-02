import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageTextAC, addNewMessageAC} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
  debugger;
  const addNewMessage = (e) => {
    let action = addNewMessageAC();
    props.dispatch(action)
  }
  const updateNewMessageText = (value) => {
    let action = updateNewMessageTextAC(value)
    props.dispatch(action)
  }
  debugger;
  return (
    <Dialogs  dialogItems={props.stateOfDialogsPage.dialogItems} 
              messages={props.stateOfDialogsPage.messages}
              newMessageText={props.stateOfDialogsPage.newMessageText}
              addNewMessage = {addNewMessage} 
              updateNewMessageText={updateNewMessageText}
    />
  )
}

export default DialogsContainer;