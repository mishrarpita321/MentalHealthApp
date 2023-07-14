import React from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./DesktopFooter.css";

const DesktopFooter = (props) => {
  return (
    <div className="footer">
      <div className="footer--top">
        <div className="TnC">        
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>About us</p>
          <p>Community</p>
        </div>
        <div className="contact">
        <p>Contact us</p>
          <div>
            <MailOutlineOutlinedIcon />
            <p>contactus@email.com</p>
          </div>
          <div>
            <CallOutlinedIcon />
            <p>+49 176 00000000</p>
          </div>
        </div>
      </div>
      <div className="social-media">
        <hr />
        <div>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookOutlinedIcon />
        </div>
        <hr />
      </div>
      <p className="copyright">Copyright 2023. All rights reserved.</p>
    </div>
  );
};

export default DesktopFooter;