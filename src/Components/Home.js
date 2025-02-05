

import React from 'react'

import { Link } from 'react-router-dom'
import Animate from '../Animate'

function Home() {
  return (
    <div>
      <Animate>
        <div className="header-wrapper">
          <div className="main-info">
            <h3>Hello, I am</h3>
            <h1><strong>Lokeshwar Elumalai</strong></h1>
            <div className='typewriter mt-4'>
              <h1>WEB DEVELOPER.</h1>
            </div>
            <a href="https://drive.google.com/file/d/18RoI0cNZlrnY6bBnrFFRtpMwCish5sgw/view?usp=drivesdk" target="_blank" className="btn-main-offer">Get Resume </a>
            <Link class="btn btn-dark  mt-4 btns" to={"/about"} role="button">About me </Link>
          </div>
        </div>
        </Animate>
    </div>
  )
}

export default Home