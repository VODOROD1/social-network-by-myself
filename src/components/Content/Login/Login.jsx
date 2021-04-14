import React from 'react'
import styles from './Login.module.css'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form'
import {Input} from '../../../common/FormsControls/FormsControls'
import {isRequire,maxLengthCreator} from '../../../common/validators/validators'

const validateMaxLength30 = maxLengthCreator(30)
const validateMaxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form className='form' onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} type='text' className={styles.loginText} 
                placeholder='Login' name={'email'} validate={[isRequire,validateMaxLength30]}/>
            </div>
            <div>
                <Field component={Input} type='password' className={styles.passwordText} 
                placeholder='Password' name={'password'} validate={[isRequire,validateMaxLength20]}/>
            </div>
            <div>
                <Field component={'input'} type='checkbox' className={styles.check}
                        name={'rememberMe'}/> remember me
            </div>
            {
                props.captchaURL &&
                <div className={styles.captchaWrapper} name={'styles'}>
                    <img src={props.captchaURL} className={styles.captcha} alt={'captcha'}/>
                    <Field component={Input} type='text' className={styles.captchaField}
                            name={'captcha'}/>
                </div>
            }
            {
                props.error ?
                <div className={styles.commonError}>
                    {'Login or password is wrong!'}
                </div> :
                null
            }
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
                <LoginReduxForm onSubmit={props.invokeLogin}
                                captchaURL={props.captchaURL}/>
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