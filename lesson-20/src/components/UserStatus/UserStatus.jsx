import styles from './UserStatus.module.css'

export default function USerStatus({ isOnline }) {
  return (
    <p className={isOnline ? styles.online : styles.offline}>
      {isOnline ? 'Пользователь в сети' : 'Пользователь не в сети'}
    </p>
  )
}
