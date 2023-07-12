import React from 'react'
import BrandLogo from '../../UI/BrandLogo'
import './DesktopHeader.css'
import { Link } from 'react-router-dom'

const DesktopHeader = ({ setShowAssessment }) => {
  const openAssessment = () => {
    setShowAssessment(true);
  }
  return (
    <div className='headerbefore'>
    <header className='header-1'>
      <BrandLogo />
     
      <div className="Login">
        <div className='get-started-btn'>
          <button onClick={openAssessment}  >Get Started</button>
        </div>
        <div className='login-btn'>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>

    </header>
    </div>
  )

}

export default DesktopHeader