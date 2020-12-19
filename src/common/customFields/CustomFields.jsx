import React from 'react'
import styles from './CustomFields.module.css'

const FormControl = (props) => { // здесь находится общий код всех кастомных филдов
    return (
        <div className={styles.wrapper}>
            {props.children}
            {props.meta.touched && props.meta.error && <span className={styles.error}>{props.meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input,meta,...props}) => {
    return (
        <FormControl meta={meta}>
            <textarea className={styles.textareaField} {...input} {...props}
                    placeholder={props.placeholder}>
            </textarea>
        </FormControl>
    )
}

export const Input = ({input,meta,...props}) => {
    return (
        <FormControl meta={meta}>
            <input className={styles.inputField} {...input} {...props} type={props.type} 
                    placeholder={props.placeholder}/>
        </FormControl>
    )
}
// value={props.fieldValue}