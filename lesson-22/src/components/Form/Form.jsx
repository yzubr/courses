import styles from './Form.module.css'

import { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setCheckbox] = useState(false)
  const [error, setError] = useState({ emailError: '', passwordError: '' })

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleEmail(event) {
    event.preventDefault()
    setEmail(event.target.value)
  }

  function handleCheckbox() {
    setCheckbox(!checked)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setError({ emailError: '', passwordError: '' })
    if (!email.includes('@')) {
      setError((current) => ({ ...current, emailError: 'Email должен содержать символ "@"' }
      ))
    }
    if (password.length < 6) {
      setError((current) => ({ ...current, passwordError: 'Пароль должен содержать не менее 6 символов' }))
    }
  }

  return (
    <>
      <form action="submit" className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles['input-block']}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" id="email" value={email} onChange={handleEmail}/>
          {error.emailError && <p className={styles.error}>{error.emailError}</p>}
        </div>
        <div className={styles['input-block']}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Create a password" id="password" value={password} onChange={handlePassword}/>
          {error.passwordError && <p className={styles.error}>{error.passwordError}</p>}
        </div>
        <div className={styles['checkbox-block']}>
          <input type="checkbox" name="checbox" id="checkbox" defaultChecked={checked} onChange={handleCheckbox}/>
          <label htmlFor="checkbox">I agree with <a href="">Terms and Conditions</a></label>
        </div>
        <button type="submit">Create account</button>
      </form>
    </>
  )
}
