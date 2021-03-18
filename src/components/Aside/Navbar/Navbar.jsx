import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';

const Navbar = (props) => {
  let c1 = "item";
  let c2 = "active";
  let classesNew = `${styles.item} ${c2}`;

  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" activeClassName={styles.active}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.active}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeClassName={styles.active}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users" activeClassName={styles.active}>
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" activeClassName={styles.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
