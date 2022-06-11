import React from 'react'
import './index.css'

const ImageCard = ({ title, date, description, image }) => {
  return (
    <div className='imageCard'>
      <img draggable={false} className='image' alt='SpaceImage' src={image} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p className='description'>{description}</p>
    </div>
  )
}

export default ImageCard
