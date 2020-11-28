import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img src='https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png' alt='logo'/>
    </div>
  )
}

export default Header;