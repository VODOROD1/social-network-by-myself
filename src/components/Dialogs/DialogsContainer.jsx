import React from 'react'
import {connect} from 'react-redux'
import withAuthRedirectHOC from '../../HOC/withAuthRedirectHOC'
import {compose} from 'redux'
import {addNewMessageAC} from '../../redux/dialogs-reducer';
import {getDialogsItems,getMessages} from '../../redux/selectors/dialogs-selector'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  const addNewMessage = (newMessageValue) => {
    let action = addNewMessageAC(newMessageValue);
    props.addNewMessage(action)
  }
  // const updateNewMessageText = (newMessage) => {
  //   let action = updateNewMessageTextAC(newMessage)
  //   props.updateNewMessageText(action)
  // }

  return (
    <Dialogs  dialogItems={props.dialogItems} 
              messages={props.messages}
              addNewMessage = {addNewMessage}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    dialogItems: getDialogsItems(state),
    messages: getMessages(state),
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