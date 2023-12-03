import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
      <>
      <h1 className="text-center text-white border-solid border-white border-2 p-1 m-2">HomePage</h1>
      <div className="home-wrap flex text-white">
        <div className="max-w-screen-md m-auto p-4">
          <h2 className="text-lg">It`s a simple Task Manager application, created using</h2>
            <p className="p-4">
              It`s a simple Task Manager application, created using: 
              <br/> &#x2022; React,
              <br/> &#x2022; React Router,
              <br/> &#x2022; Redux Toolkit,
              <br/> &#x2022; Tailwind,
              <br/> &#x2022; TypeScript.
            </p>
          </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default HomePage