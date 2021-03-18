import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
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
            <div>
              <textarea 
                      onInput={props.updateNewMessageText} 
                      value={props.newMessageText}>
              </textarea>
            </div>
            <div>
              <button onClick={props.addNewMessage}>Add new message</button>
            </div>
      </div>
    </div>
  )
}

export default Dialogs;