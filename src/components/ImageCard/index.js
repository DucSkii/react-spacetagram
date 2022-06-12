import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './index.css'

const ImageCard = ({ title, date, description, image, setModal }) => {
  return (
    <div
      className='imageCard'
      onClick={() => setModal({ title, date, description, image })}
    >
      <img draggable={false} className='image' alt='SpaceImage' src={image} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p className='description'>{description}</p>
    </div>
  )
}

export default ImageCard
