import React from 'react'
import BrandLogo from '../../UI/BrandLogo'
import './DesktopMenu.css'
import { Auth } from '../../../screens/auth/Auth'
import { Link } from 'react-router-dom'
import Signup from '../../Signup/Signup'
import AssessmentQns from '../../AssessmentQns/AssessmentQns'


const DesktopMenu = ({ setShowAssessment }) => {
  const openAssessment = () => {
    setShowAssessment(true);
  }
  return (
    <header className='header'>
      <BrandLogo />
      <nav>
        <ul>
          <li><a href="#">Diary</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
      <div className="userProfile">
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
  )

}

export default DesktopMenu