import React, { useEffect, useState } from 'react'
import { Modal as MaterialModal } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close'
import { checkForMatch } from '../utils/arrayMatch'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './index.css'

const Modal = ({ modal, setModal, likedImages, unLikeImage, likeImage }) => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (modal !== null) {
      console.log('modal.date', modal.date)
      if (checkForMatch(likedImages, modal.date)) {
        setLiked(true)
      } else {
        setLiked(false)
      }
    }
  }, [likedImages, modal])

  return (
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
          {liked ? (
            <div
              className='icon'
              style={{ marginRight: '15px' }}
              onClick={() => {}}
            >
              <FavoriteIcon
                style={{ fontSize: '30px' }}
                onClick={() =>
                  unLikeImage({
                    title: modal.title,
                    date: modal.date,
                    image: modal.image,
                    description: modal.description,
                  })
                }
              />
            </div>
          ) : (
            <div
              className='icon'
              style={{ marginRight: '15px' }}
              onClick={() => {}}
            >
              <FavoriteBorderIcon
                style={{ fontSize: '30px' }}
                onClick={() =>
                  likeImage({
                    title: modal.title,
                    date: modal.date,
                    image: modal.image,
                    description: modal.description,
                  })
                }
              />
            </div>
          )}
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
}

export default Modal
