import React from 'react'
import {connect} from 'react-redux'
import withAuthRedirectHOC from '../../HOC/withAuthRedirectHOC'
import {compose} from 'redux'
import {updateNewMessageTextAC, addNewMessageAC} from '../../redux/dialogs-reducer';
import {getDialogsItems,getMessages,getNewMessageText} from '../../redux/selectors/dialogs-selector'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  const addNewMessage = (e) => {
    let action = addNewMessageAC();
    props.addNewMessage(action)
  }
  const updateNewMessageText = (newMessage) => {
    let action = updateNewMessageTextAC(newMessage)
    props.updateNewMessageText(action)
  }

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
    dialogItems: getDialogsItems(state),
    messages: getMessages(state),
    newMessageText: getNewMessageText(state),
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

export default compose(
  connect(mapStateToProps,mapDispatchToProp),
  withAuthRedirectHOC
)(DialogsContainer)