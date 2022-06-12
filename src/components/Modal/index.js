import React from 'react'
import { Modal as MaterialModal } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close'
import './index.css'

const Modal = ({ modal, setModal }) => (
  <MaterialModal
    className='modal'
    open={modal ? true : false}
    onClose={() => setModal(null)}
  >
    {modal ? (
      <div className='modalBody'>
        <div className='closeButton' onClick={() => setModal(null)}>
          <CloseIcon style={{ fontSize: '35px' }} />
        </div>
        <img draggable={false} src={modal.image} alt='spaceimage' />
        <div className='image-desc'>
          <h2>{modal.title}</h2>
          <p>{modal.date}</p>
          <div>{modal.description}</div>
        </div>
      </div>
    ) : (
      <></>
    )}
  </MaterialModal>
)

export default Modal
