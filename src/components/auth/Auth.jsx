import React from 'react'
import styles from './Auth.module.css'

const Auth = (props) => {
  const [emailValue, setEmailValue] = React.useState('vodorodo51@gmail.com')
  const [passwordValue, setPasswordValue] = React.useState('R6n1gAZ43K9')
  const [checkBox, setCheckBox] = React.useState(false)

  const inputEmail = (e) => {
    setEmailValue(e.target.value)
  }
  const inputPassword = (e) => {
    setPasswordValue(e.target.value)
  }

  const checkBoxHandler = (e) => {
    setCheckBox(!checkBox)
  }

  const loginHandler = () => {
    props.loginHandler(emailValue,passwordValue,checkBox)
  }
  
  return (
    <div className={styles.auth}>

        <p className={styles.inputWrapper}><input type='email' onInput={inputEmail} 
                      placeholder={'Input email'} value={emailValue}/></p>
        <p className={styles.inputWrapper}><input type='password' onInput={inputPassword} 
                      placeholder={'Input password'} value={passwordValue}/></p>
        <p className={styles.inputWrapper}><input type='checkbox' checked={checkBox} onClick={checkBoxHandler}/></p>
        <p className={styles.inputWrapper}><button onClick={loginHandler}>Login</button><button>Exit</button></p>
    
    </div>
  )
}

export default Auth;