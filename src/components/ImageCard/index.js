import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { checkForMatch } from '../utils/arrayMatch'
import './index.css'

const ImageCard = ({
  title,
  date,
  description,
  image,
  setModal,
  likedImages,
  likeImage,
  unLikeImage,
}) => {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (checkForMatch(likedImages, date)) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }, [likedImages, date])

  return (
    <div style={{ position: 'relative' }}>
      {liked ? (
        <div
          className='icon'
          onClick={() => unLikeImage({ title, date, image, description })}
        >
          <FavoriteIcon style={{ fontSize: '30px' }} />
        </div>
      ) : (
        <div
          className='icon'
          onClick={() => likeImage({ title, date, image, description })}
        >
          <FavoriteBorderIcon style={{ fontSize: '30px' }} />
        </div>
      )}
      <div
        className='imageCard'
        onClick={() => setModal({ title, date, description, image })}
      >
        <img draggable={false} className='image' alt='SpaceImage' src={image} />
        <h2>{title}</h2>
        <p>{date}</p>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}

export default ImageCard
