import Logo from "../../assets/Logo.png";
import './BrandLogo.css';
import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <div className="logo">
        <img src={Logo} alt="Logo"/>
        <Link to='/userlogin'><a href="#">Mind Matters</a></Link>
    </div>
  );
};

export default BrandLogo;