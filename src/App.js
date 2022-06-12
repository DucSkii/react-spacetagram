import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
// import axios from 'axios'
// import ImageCard from './components/ImageCard'
import Modal from './components/Modal'

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

  // {!imagesLoaded ? (
  //   <div>Loading Images</div>
  // ) : (
  //   <div className='imageGallery'>
  //     {/* <DateFilter /> */}
  //     {images.map((imageObject, index) => {
  //       return (
  //         <div key={index}>
  //           <ImageCard
  //             title={imageObject.title}
  //             date={imageObject.date}
  //             description={imageObject.description}
  //             image={imageObject.image}
  //             likedImages={likedImages}
  //             likeImage={likeImage}
  //             unLikeImage={unLikeImage}
  //             setModal={setModal}
  //           />
  //         </div>
  //       )
  //     })}
  //   </div>
  // )}
  return (
    <div className='App'>
      <Modal modal={modal} setModal={setModal} />
      <h1 className='title'>Spacetagram</h1>
      <Routes>
        <Route path='/' element={<Home setModal={setModal} />} />
      </Routes>
    </div>
  )
}

export default App
