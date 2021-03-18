import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img src='https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png' alt='logo'/>
    
      <div className={styles.login}>
        {
          props.isAuth ?
          <span>{props.login}</span> :
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </div>
  )
}

export default Header;