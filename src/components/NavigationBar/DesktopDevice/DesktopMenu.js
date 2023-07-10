import React from 'react'
import BrandLogo from '../../UI/BrandLogo'
import './DesktopMenu.css'


const DesktopMenu=()=>{
    return(
        <header className='header'>
         <BrandLogo/>
          <nav>
          <ul>
            <li><a href="#">Diary</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          </nav>
        <div className="userProfile">
          <div className='get-started-btn'>
        <button>Get Started</button>
        </div>
        <div className='login-btn'>
        <button>Login</button>
        </div>
        </div>
        
      </header>
    )
    
}

export default DesktopMenu