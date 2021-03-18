import React from 'react'
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={styles.wrapper}>
            <svg viewBox="0 0 120 120" className={styles.svg_preloader}>
                <symbol id="s-circle">
                    <circle r="10" cx="10" cy="10"></circle>
                </symbol>
                <rect className={styles.r_bounds} width="100%" height="100%"/>
                <g id="circle" className={styles.g_circles}>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                    <use xlinkHref="#s-circle" className={styles.u_circle}/>
                </g>
            </svg>
        </div>
    )
}

export default Preloader