import React from 'react'
import "./Header.css";
import NavigationBar from '../NavigationBar/NavigationBar';


const Header = ({ setShowAssessment = ()=>{} }) => {
    return (
        <div className="header">
            <NavigationBar setShowAssessment={setShowAssessment} />
        </div>
    )

}

export default Header;