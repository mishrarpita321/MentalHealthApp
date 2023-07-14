import React from 'react'
import BrandLogo from '../../UI/BrandLogo'
import './DesktopHeader.css'
import { Link } from 'react-router-dom'

const DesktopHeader = ({ setShowAssessment }) => {
  const openAssessment = () => {
    setShowAssessment(true);
  }
  return (
    <div className='headerbefore-1'>
    <header className='header-1'>
      <BrandLogo />
     
      <div className="Login-1">
        <div className='get-started-btn-1'>
          <button onClick={openAssessment}  >Get Started</button>
        </div>
        <div className='login-btn-1'>
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