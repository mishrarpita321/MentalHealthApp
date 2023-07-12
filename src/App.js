import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth } from './screens/auth/Auth';
import LandingPageDesktop from './components/NavigationBar/DesktopDevice/LandingPageDesktop';
import LandingPage from './components/NavigationBar/DesktopDevice/LandingPage';
import { Routes, Route, Link } from "react-router-dom";
import Diary from './components/Diary/Diary';
import AssessmentQns from './components/AssessmentQns/AssessmentQns';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/userlogin" exact element={<LandingPageDesktop/>}/>
        <Route path='/userlogin/diary' element={<Diary/>}/>
        <Route path='/assessment' element={<AssessmentQns/>}/>
        <Route path='/diary' element={<Diary/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App