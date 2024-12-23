'use client'
import { useState } from 'react'
import Modal from '@/app/(admin)/admin/components/Modal'
import ModalCreateCategory from '@/app/(admin)/admin/components/ModalCreateCategory'

export default function Page({ children }) {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <header>
        <h1>dashboard - categories page</h1>
      </header>
      {children}
      <button type="button" onClick={handleOpenModal}>Add new category</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalCreateCategory isOpen={isModalOpen} onClose={handleCloseModal} />
      </Modal>
    </>
  )
}
