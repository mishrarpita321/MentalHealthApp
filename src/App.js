import './App.css';
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
