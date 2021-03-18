import React from 'react'
import styles from './Login.module.css'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form className='form' onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} type='text' className={styles.loginText} 
                placeholder='Login' name={'email'}/>
            </div>
            <div>
                <Field component={'input'} type='password' className={styles.passwordText} 
                placeholder='Password' name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type='checkbox' className={styles.check}
                        name={'rememberMe'}/> remember me
            </div>
            <div>
                <button className={styles.signIn}>Sign in</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm)

const Login = (props) => {
    return (
        <>
        {
            props.isAuth ?
            <Redirect to='/profile' /> :
            <div className={styles.wrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={props.invokeLogin}/>
            </div>
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{})(Login)