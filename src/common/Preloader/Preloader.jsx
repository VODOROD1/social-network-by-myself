import React from 'react'
import Spinner from '../../assets/Spinner.gif'
import styles from './Preloader.module.css'

const Preloader = (props) => {
  return (
    <div className={styles.preloaderWrapper}>
      <img className={styles.preloader} src={Spinner} />
    </div>
  )
}

export default Preloader