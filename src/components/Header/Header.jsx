import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img src='https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png' alt='logo'/>
      {
        props.isAuth ? 
        <p>{props.loginName} - <button onClick={props.logout}>Logout</button></p> : 
        <p>
          <NavLink to='/auth'>
            Login
          </NavLink>
        </p>
      }
    </div>
  )
}

export default Header;