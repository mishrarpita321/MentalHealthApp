import Logo from "../../assets/Logo.png";
import './BrandLogo.css';

const BrandLogo = () => {
  return (
    <div className="logo">
        <img src={Logo} alt="Logo"/>
        <a href="#">Mind Matters</a>
    </div>
  );
};

export default BrandLogo;