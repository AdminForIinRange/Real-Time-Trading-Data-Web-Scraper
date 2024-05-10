import React from 'react'
import Navbar from './Navbar'
import LandingText from './LandingText'
import { NavLink } from "react-router-dom";
import "./lanidng.css"
import marketing from '../img/3d-business-man-presenting-business-growth-illustration-png.png'
export default function Landing() {
  return (
    <div>
        <Navbar />
        <LandingText />

        <img className='landingImg animate__animated animate__slideInRight animate__slower animate__delay-500ms' src={marketing}  />
      <div className='Login'>

        
        
      <NavLink to={ localStorage.getItem("userAuthVlaid") === "true" ? '/Home' : '/Auth'}>
            <button class="custom-gradient-button animate__animated animate__bounceInUp animate__slower animate__delay-500ms ">Enter Website</button>


            </NavLink>
   
      </div>

        



    </div>
  )
}
