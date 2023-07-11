import  "./NavigationBar.css";
import {useMediaQuery} from "react-responsive"
import DesktopMenu from './DesktopDevice/DesktopMenu';
import MobileMenu from "./MobileDevice/MobileMenu";

const NavigationBar = ({setShowAssessment}) => {
  const isTableforMobile= useMediaQuery({query:"(max-width:768px)"});

  return (
    <div className="navigation-wrapper">
      <nav>{isTableforMobile ? <MobileMenu setShowAssessment = {setShowAssessment}/> : <DesktopMenu setShowAssessment={setShowAssessment}/>}</nav>
    </div>
      
  );
};

export default NavigationBar;