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
  );
}

export default App;
