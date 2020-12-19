import React from 'react'
import {Field,reduxForm} from 'redux-form'
import styles from './Auth.module.css'
import {requairedValid,maxLengthCreator} from '../../common/validation/formValidation'
import {Input} from '../../common/customFields/CustomFields'

const maxLength30 = maxLengthCreator(30)

const AuthForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <p className={styles.inputWrapper}>
          <Field component={Input} placeholder={'Input email'} type='email'
                  validate={[maxLength30]} name='emailField'
                  fieldValue={'vodorodo51@gmail.com'}/>
        </p>
        <p className={styles.inputWrapper}>
          <Field component={Input} placeholder={'Input password'} type='password'
                  validate={[maxLength30]} name='passwordField'
                  fieldValue={'R6n1gAZ43K9'}/>
        </p>
        <p className={styles.inputWrapper}>
          <Field component={Input} name='checkboxField' type='checkbox'/>
        </p>
        <p className={styles.inputWrapper}>
          <button>Login</button>
        </p>
    </form>
  )
}

const AuthReduxForm = reduxForm({form: 'authForm'})(AuthForm)

const Auth = (props) => {
  const loginHandler = (formData) => {
    props.loginHandler(formData.emailField, formData.passwordField, formData.checkboxField)
  }
  
  return (
    <div className={styles.auth}>
      <AuthReduxForm onSubmit={loginHandler}/>
    </div>
  )
}

export default Auth;