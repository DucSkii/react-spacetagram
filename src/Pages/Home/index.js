import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageCard from '../../components/ImageCard'
import './index.css'

const Home = ({ setModal, unLikeImage, likeImage, likedImages }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [images, setImages] = useState([])
  // const [dateFilter, setDateFilter] = useState([0, 0])
  const standardImageCount = 5

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?count=${standardImageCount}&thumbs=True&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt`
      )
      .then((res) => {
        const imagesArray = res.data
        imagesArray.forEach((imageData) => {
          let title = imageData.title
          let date = imageData.date
          let description = imageData.explanation
          let image = imageData.url
          let imageObject = { title, date, description, image }
          setImages((prevState) => [...prevState, imageObject])
        })
        setImagesLoaded(true)
      })
  }, [])

  return (
    <>
      {!imagesLoaded ? (
        <div>Loading Images</div>
      ) : (
        <div className='imageGallery'>
          {/* <DateFilter /> */}
          {images.map((imageObject, index) => {
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
      )}
    </>
  )
}

export default Home
