import styles from '../../styles/Modal.module.css'

export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.overlay} onClick={onClose} onKeyDown={onClose}>
      <div className={styles.modal}>
        <button type="button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  )
}
