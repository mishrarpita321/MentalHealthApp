import React from 'react'
import BrandLogo from '../../UI/BrandLogo'
import './DesktopMenu.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'

const DesktopMenu = ({ setShowAssessment }) => {
  const openAssessment = () => {
    setShowAssessment(true);
  }
  return (
    <header className='header'>
      <BrandLogo />
      <nav>
        <ul>
          <Link to='/userlogin/diary'><li><a href="#">Diary</a></li></Link>
          <li><a href="#">Community</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
       <div className='userProfile'>
       <p>Hello XXXXXXXX</p>
       <Avatar src="/broken-image.jpg" />
       
      </div>

    </header>
  )

}

export default DesktopMenu