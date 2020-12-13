import React from 'react'
import styles from './Auth.module.css'

const Auth = (props) => {
  const [emailValue, setEmailValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')

  const inputEmail = (e) => {
    setEmailValue(e.target.value)
  }
  const inputPassword = (e) => {
    setPasswordValue(e.target.value)
  }

  const loginHandler = () => {
    props.loginHandler(emailValue,passwordValue)
  }
  
  return (
    <div className={styles.auth}>
      <form>
        <p className={styles.inputWrapper}><input type='email' onInput={inputEmail} placeholder={'vodorodo51@gmail.com'}/></p>
        <p className={styles.inputWrapper}><input type='password' onInput={inputPassword} placeholder={'R6n1gAZ43K9'}/></p>
        <p className={styles.inputWrapper}><button onClick={loginHandler}>Login</button><button>Exit</button></p>
      </form>
    </div>
  )
}

export default Auth;