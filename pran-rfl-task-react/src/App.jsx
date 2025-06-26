import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:category" element={<Jobs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
