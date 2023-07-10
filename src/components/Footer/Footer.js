import React from 'react'
import "./Footer.css";
import { useMediaQuery } from 'react-responsive';
import DesktopFooter from '../NavigationBar/DesktopDevice/DesktopFooter';
import MobileFooter from '../NavigationBar/MobileDevice/MobileFooter';


const Footer=()=>{
    const isFooterforMobile= useMediaQuery({query:"(max-width:768px)"});
    return(
        <div className="footer">
        {isFooterforMobile ? <MobileFooter/> : <DesktopFooter />}
        </div>
    )
    
}

export default Footer;