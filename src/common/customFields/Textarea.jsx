import styles from './Textarea.module.css'

const Textarea = ({input,meta,...props}) => {
    
    return (
        <div className={styles.textareaWrapper}>
            <textarea className={styles.textareaField} {...input} {...props} placeholder={props.placeholder}></textarea>
            {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export default Textarea