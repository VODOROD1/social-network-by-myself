import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const addNewMessage = (e) => {
    props.addNewMessage()
  }
  const updateNewMessageText = (e) => {
    props.updateNewMessageText(e.target.value)
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
            <div><textarea onInput={updateNewMessageText} value={props.newMessageText}>
              </textarea></div>
            <div><button onClick={addNewMessage}>Add new message</button></div>
      </div>
    </div>
  )
}

export default Dialogs;