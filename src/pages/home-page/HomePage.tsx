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

          <h2 className="text-lg">Contribute</h2>
            <p className="p-4">
              To run it locally on your own computer:
              <br/> &#x2022; [Fork](https://help.github.com/articles/fork-a-repo/) this repository
              <br/> &#x2022; [Clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
              <br/> &#x2022; [Install](https://yarnpkg.com/en/docs/cli/install) the dependencies
              <br/> &#x2022; [Run](https://github.com/bukinoshita/taskr/blob/master/package.json#L25) the project  
            </p>
          </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default HomePage