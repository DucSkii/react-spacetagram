import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageCard from '../../components/ImageCard'
import DateFilter from '../../components/DateFilter'
import './index.css'

const Home = ({ setModal, unLikeImage, likeImage, likedImages }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [images, setImages] = useState([])
  const [dateFilter, setDateFilter] = useState([])
  const standardImageCount = 20

  useEffect(() => {
    setImages([])
    setImagesLoaded(false)
    let apiRequest = dateFilter.length
      ? `https://api.nasa.gov/planetary/apod?start_date=${dateFilter[0]}-${
          dateFilter[1]
        }-1&end_date=${
          dateFilter[1] === 12 ? dateFilter[0] + 1 : dateFilter[0]
        }-${
          dateFilter[1] === 12 ? '1' : dateFilter[1] + 1
        }-1&thumbs=True&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt`
      : `https://api.nasa.gov/planetary/apod?count=${standardImageCount}&thumbs=True&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt`
    console.log('apiRequest', apiRequest)

    axios.get(apiRequest).then((res) => {
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
  }, [dateFilter])

  return (
    <>
      {!imagesLoaded ? (
        <div>Loading Images</div>
      ) : (
        <>
          <DateFilter setDateFilter={setDateFilter} />
          <div className='imageGallery'>
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
        </>
      )}
    </>
  )
}

export default Home
