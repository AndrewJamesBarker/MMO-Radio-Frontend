import './App.css'

import dotenv from 'dotenv';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from './components/MainBody';
import AudioPlayer from "./components/AudioPlayer";

// dotenv.config();

//import page content
import Home from "./routes/Home";
import About from "./routes/About";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
    
  
  )
}

export default App
