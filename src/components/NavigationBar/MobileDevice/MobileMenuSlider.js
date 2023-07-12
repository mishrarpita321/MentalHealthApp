import "./MobileMenuSlider.css";
import Notes from '@mui/icons-material/Notes'
import People from '@mui/icons-material/People'
import Info from '@mui/icons-material/Info'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MobileMenuSlider = (props) => {

  return (
    <div className="mobile-menu-slider">
      <button onClick={props.onClick} className="close-slider-btn">
        x
        </button>
        <h2>Mind Matters</h2>
        <ul className="mobile-navigation">
        <Link to='/userlogin/diary'>
        <li>
         <a href="#"><Notes/>Diary</a>
        </li>
        </Link>
        <li>
          <a href="#"><People/>Community</a>
        </li>
        <li>
          <a href="#"><Info/>About Us</a>
        </li>
      </ul>
     
    </div>
  );
};

export default MobileMenuSlider;
