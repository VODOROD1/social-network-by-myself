import React from 'react';
import styles from './Header.module.css';
import AuthContainer from '../auth/AuthContainer'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img src='https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png' alt='logo'/>
      {props.login !== '' ? <p>{props.login}</p> : <AuthContainer />}
    </div>
  )
}

export default Header;