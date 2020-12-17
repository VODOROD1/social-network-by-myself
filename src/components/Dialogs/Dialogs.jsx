import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field,reduxForm} from 'redux-form'
import Textarea from '../../common/customFields/Textarea'
import {requairedValid,maxLengthCreator} from '../../validation/formValidation'

const maxLength20 = maxLengthCreator(20)

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} type='text' placeholder='Enter new message'
                  name='newMessage' validate={[requairedValid,maxLength20]}/></div>
            <div><button>Add new message</button></div>
    </form>
  )
}

let DialogsReduxForm = reduxForm({form: 'dialogForm'})(DialogsForm)

const Dialogs = (props) => {
  const addNewMessage = (objField) => {
    props.addNewMessage(objField.newMessage)
  }
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
          {props.dialogItems.map((item, index) => 
            <DialogItem item={item} id={index}/>
          )}
      </div>
      <div className={styles.messages}>
          {props.messages.map((message, index) => 
            <Message message={message} id={index}/>
          )}
      </div>
        <div className={styles.newMessage}>
              <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
    </div>
  )
}

export default Dialogs;