import React from 'react'
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./MobileFooter.css";
 
const MobileFooter=()=>{
    return (
        <div className="mobfooter">
          <div className="mobfooter--top">
            <div className="mobTnC">        
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>About us</p>
              <p>Community</p>
            </div>
            </div>
            <div className="mobcontact">
            <h4>Contact us</h4>
            <p><MailOutlineOutlinedIcon/> contactus@email.com</p>
            <p><CallOutlinedIcon/> +49 176 00000000</p>
          </div>
          <div className="mobsocial-media">
            <hr />
            <div>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookOutlinedIcon />
            </div>
            <hr />
          </div>
          <p className="mobcopyright">Copyright 2023. All rights reserved.</p>
        </div>
    )
}

export default MobileFooter