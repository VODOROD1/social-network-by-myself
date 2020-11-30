import  React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div className={styles.dialogItem}>
      <NavLink to={`/dialogs/${props.id+1}`}>{props.item}</NavLink>
    </div>
  )
}

export default DialogItem;