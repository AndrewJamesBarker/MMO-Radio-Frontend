import './App.css'


import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from './components/MainBody';


//import page content
import Home from "./routes/Home";


function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
