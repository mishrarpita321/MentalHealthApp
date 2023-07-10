import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth } from './screens/auth/Auth';
import LandingPageDesktop from './components/NavigationBar/DesktopDevice/LandingPageDesktop';
import { Routes, Route, Link } from "react-router-dom";
import Diary from './components/Diary/Diary';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageDesktop />}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path='/diary' element={<Diary/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App