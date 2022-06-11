import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

/*
- Call data from NASA API
- Card component, displaying image, title, date, description
- Each card can be clicked into to expand and can be "Liked"
- Include a loading state whilst gathering images
- Create sharable links for each image
- Date filter
- Include local storaging
API 20: https://api.nasa.gov/planetary/apod?count=20&thumbs=true&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt
API FILTER: https://api.nasa.gov/planetary/apod?start_date=2020-1-1&end_date=2020-2-1&thumbs=true&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt
API 1 IMAGE TEST: https://api.nasa.gov/planetary/apod?count=1&thumbs=true&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt
*/

const App = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [images, setImages] = useState([])
  const [dateFilter, setDateFilter] = useState([0, 0])
  const standardImageCount = 5
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?count=${standardImageCount}&thumbs=true&api_key=mDEcaIVsADm4IjeqttbyEn5W1eAD336EHkTbKlIt`
      )
      .then((res) => {
        const imagesArray = res.data
        imagesArray.forEach((imageData) => {
          let title = imageData.title
          let date = imageData.date
          let description = imageData.description
          let image = imageData.url
          let imageObject = { title, date, description, image }
          setImages((prevState) => [...prevState, imageObject])
        })
        setImageLoaded(true)
      })
  }, [])

  console.log('images', images)
  console.log('imageLoaded', imageLoaded)
  return (
    <div className='App'>
      <h1 className='title'>Spacetagram</h1>
      {/* <DateFilter /> */}
    </div>
  )
}

export default App
