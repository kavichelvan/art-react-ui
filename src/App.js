// src/App.js
// https://lottiefiles.com/

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Lottie from 'lottie-react'
import animationData from './animation.json'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => {
        setData(response.data)
        //setData("");
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="App">
      {data ? (
        <div>
          <h1>Data from Frontend</h1>
          <p>{data.message}</p>
          {/* <ul>
            {data.data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </div>
      ) : (
        // <div className="spinner"></div>
        //     <div className="dots">
        //   <div className="dot"></div>
        //   <div className="dot"></div>
        //   <div className="dot"></div>
        // </div>
        //   <div className="progress-bar-container">
        // <div className="progress-bar"></div>
        //   </div>
        //     <div>
        //   <h1><Skeleton width={300} /></h1>
        //   <p><Skeleton count={3} /></p>
        // </div>
        <div className="loader-container">
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 300, height: 300 }}
          />
        </div>
      )}
    </div>
  )
}

export default App
