import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import Modal from './components/Modal'
import Liked from './Pages/Liked'

/*
- Call data from NASA API
- Card component, displaying image, title, date, description
- Each card can be clicked into to expand and can be "Liked"
- Include a loading state whilst gathering images
- Create sharable links for each image
- Date filter
- Include local storaging
API 20: https://api.nasa.gov/planetary/apod?count=20&thumbs=True&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt
API FILTER: https://api.nasa.gov/planetary/apod?start_date=2020-1-1&end_date=2020-2-1&thumbs=True&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt
API 1 IMAGE TEST: https://api.nasa.gov/planetary/apod?count=1&thumbs=True&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt
UUID = DATE OF THE IMAGE
*/

const App = () => {
  const [modal, setModal] = useState(null)
  const [likedImages, setLikedImages] = useState([])

  useEffect(() => {
    let storedLikedImages = JSON.parse(
      localStorage.getItem('likedImages') || '[]'
    )
    console.log('storedLikedImages', storedLikedImages)
    setLikedImages(storedLikedImages)
  }, [])
  const likeImage = (image) => {
    setLikedImages((prevState) => [...prevState, image])
    localStorage.setItem('likedImages', JSON.stringify([...likedImages, image]))
  }
  const unLikeImage = (image) => {
    let filteredImages = likedImages.filter(
      (likedImage) => likedImage.date !== image.date
    )
    setLikedImages(filteredImages)
    console.log('filteredImages', filteredImages)
    localStorage.setItem('likedImages', JSON.stringify(filteredImages))
  }
  console.log('likedImages', likedImages)
  return (
    <div className='App'>
      <Modal modal={modal} setModal={setModal} />
      <h1 className='title'>Spacetagram</h1>
      <div className='navBar'>
        <Link to='/' className='nav'>
          Home
        </Link>
        <Link to='/liked' className='nav'>
          Liked
        </Link>
      </div>
      <Routes>
        <Route
          path='/liked'
          element={
            <Liked
              setModal={setModal}
              likeImage={likeImage}
              unLikeImage={unLikeImage}
              likedImages={likedImages}
            />
          }
        />
        <Route
          path='/'
          element={
            <Home
              setModal={setModal}
              likeImage={likeImage}
              unLikeImage={unLikeImage}
              likedImages={likedImages}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
