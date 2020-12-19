import React from 'react'

const EmailField = (props) => {
    debugger;
    return (
        <div>
            <input type='email' {...props} 
                placeholder={props.placeholder}/>
            {props.meta.touched && props.meta.error && <span>{props.meta.error}</span>}
        </div>
    )
}

export default EmailField