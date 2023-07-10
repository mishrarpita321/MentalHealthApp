import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth } from './screens/auth/Auth';
import Home from './screens/Home';
import { Routes, Route, Link } from "react-router-dom";
import ChatBotHome from './components/ChatBot/ChatBotHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/login"
          element={
            <Auth />
          }
        />
      </Routes>
    </BrowserRouter>
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPageDesktop from './components/NavigationBar/DesktopDevice/LandingPageDesktop';

function App() {
  return (
    <div>
   <Header/>
   <body>
    <LandingPageDesktop/>
   </body>
   <Footer/>
    </div>
  
  );
}

export default App;
