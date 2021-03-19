import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field,reduxForm} from 'redux-form'
import {Textarea} from '../../../common/FormsControls/FormsControls'
import {isRequire,maxLengthCreator} from '../../../common/validators/validators'
import getKey from '../../../common/key/createKey'

const validateMaxLength50 = maxLengthCreator(50)

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name={'newDialogField'} validate={[isRequire,validateMaxLength50]} />
        </div>
        <div>
          <button>Add new message</button>
        </div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'DialogsForm'})(DialogsForm)

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
          {props.dialogItems.map((item, index) => 
            <DialogItem item={item} id={index} key={getKey(item)}/>
          )}
      </div>
      <div className={styles.messages}>
          {props.messages.map((message, index) => 
            <Message message={message} id={index} key={getKey(message)}/>
          )}
      </div>
      <div className={styles.newMessage}>
        <DialogsReduxForm onSubmit={props.addNewMessage}/>
      </div>
    </div>
  )
}

export default Dialogs;