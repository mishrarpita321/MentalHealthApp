import React from 'react'
import DesktopHeader from './DesktopHeader';
import AssessmentQns from '../../AssessmentQns/AssessmentQns'
import Background from '../../../assets/Background.png';
import '../DesktopDevice/LandingPage.css';
import { useState } from 'react';

 const LandingPage=()=>{
    const [showAssessment, setShowAssessment] = useState(false)
    return(
        <div className='main-page'>
        <DesktopHeader setShowAssessment={setShowAssessment} />
        <div className='picture-1'>
            <img src={Background} alt='Image' />
        </div>
        {showAssessment && <AssessmentQns setShowAssessment={setShowAssessment} />}
        </div>
        
    )
   
 }
 export default LandingPage