import React from 'react'
import ImageCard from '../../components/ImageCard'

const Liked = ({likedImages, likeImage, unLikeImage, setModal}) => {

  return (
    <>
    {
      likedImages.length ? (
        <div className='imageGallery'>
        {likedImages.map((imageObject, index) => {
          return (
            <div key={index}>
              <ImageCard
                title={imageObject.title}
                date={imageObject.date}
                description={imageObject.description}
                image={imageObject.image}
                likedImages={likedImages}
                likeImage={likeImage}
                unLikeImage={unLikeImage}
                setModal={setModal}
              />
            </div>
          )
        })}
      </div>
      ) : (
        <div>No Liked Images</div>
      )
    }
    </>
  )

}

export default Liked