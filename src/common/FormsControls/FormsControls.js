import React from 'react'
import {Field,reduxForm} from 'redux-form'
import styles from './FormsControls.module.css'

export const Textarea = (props) => {
    return (
        <div>
            <textarea {...props} {...props.input} />
        </div>
    )
}

