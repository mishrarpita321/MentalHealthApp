import "./MobileMenuSlider.css";
import Notes from '@mui/icons-material/Notes'
import { Apps } from "@mui/icons-material";
import Info from '@mui/icons-material/Info'
import { Link } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";

const MobileMenuSlider = (props) => {

  return (
    <div className="mobile-menu-slider">
      <button onClick={props.onClick} className="close-slider-btn">
        x
        </button>
        <Avatar className="avatar" src="/broken-image.jpg" />
        <h2>Mind Matters</h2>
        <ul className="mobile-navigation">
        <li>
        <Notes/>
        <Link to='/userlogin/diary'>
        <a href="#">Diary</a>
        </Link>
        </li>
        <li>
        <Apps/>
        <Link>
        <a href="#">Activities</a>
        </Link>
        </li>
        <li>
        <Info/>
        <Link>
        <a href="#">About Us</a>
        </Link>
        </li>
        <li>
        <Logout/>
        <Link to='/'>
        <a href="#">Logout</a>
        </Link> 
        </li>
      </ul>
     
    </div>
  );
};

export default MobileMenuSlider;
