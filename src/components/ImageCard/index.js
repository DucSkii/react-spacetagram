import React from 'react'
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
