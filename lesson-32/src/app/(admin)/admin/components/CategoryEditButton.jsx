'use client'

import { useState } from 'react'
import Modal from './Modal'
import ModalEditeCategory from './ModalEditeCategory'

export default function CategoryEditButton({ categoryId }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Edit Category
      </button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <ModalEditeCategory isOpen={modalOpen} onClose={handleCloseModal} />
      </Modal>
    </>
  )
}
