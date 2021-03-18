import React from 'react'
import styles from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const isError = !meta.active && meta.error && meta.touched

    return (
        <div className={styles.formControlTextarea + ' ' + (isError ? styles.error : '')}>
            <textarea {...props} {...input} />
            {
                isError ?
                <span>{meta.error}</span> :
                null
            }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const isError = !meta.active && meta.error && meta.touched

    return (
        <div className={styles.formControlTextarea + ' ' + (isError ? styles.error : '')}>
            <input type={props.type}  {...props} {...input} />
            {
                isError ?
                <span>{meta.error}</span> :
                null
            }
        </div>
    )
}

