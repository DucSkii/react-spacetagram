import React from 'react'
import { Modal as MaterialModal } from '@material-ui/core'
import './index.css'

const Modal = ({ modal, setModal }) => (
  <MaterialModal
    className='modal'
    disableBackdropClick
    open={modal ? true : false}
    onClose={() => setModal(null)}
  >
    {modal ? (
      <div className='modalBody'>
        <img draggable={false} src={modal.image} alt='spaceimage' />
        <div className='image-desc'>
          <h2>{modal.title}</h2>
          <p>{modal.date}</p>
          <div>
            {modal.description}
            {modal.description}
          </div>
        </div>
      </div>
    ) : (
      <></>
    )}
  </MaterialModal>
)

export default Modal
