import BrandLogo from "../../UI/BrandLogo";
import { useState } from "react";
import "./MobileMenu.css";
import { ReactComponent as MenuButtonIcon } from "../../../assets/icon-menu.svg";
import MobileMenuSlider from "./MobileMenuSlider";

const MobileMenu = () => {
  const [showMenuSlider, setShowMenuSlider] = useState(false);

  const showSliderHandler = () => {
    setShowMenuSlider(!showMenuSlider);
  };

  return (
    <div className="mobile-header-menu">
      {showMenuSlider && <MobileMenuSlider onClick={showSliderHandler} />}
      <BrandLogo />
      <button onClick={showSliderHandler} className="menu-button">
        <MenuButtonIcon className="menu-button-icon" />
      </button>
    </div>
  );
};

export default MobileMenu;
