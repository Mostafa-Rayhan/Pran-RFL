import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import JobDetails from './pages/JobDetails/JobDetails';
import JobApply from './pages/JobApply/JobApply';
import ApplicationSuccess from './pages/ApplicationSuccess/ApplicationSuccess';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:category" element={<Jobs />} />
          <Route path="/jobs/details/:id" element={<JobDetails />} />
          <Route path="/jobapply/:id" element={<JobApply />} />
          <Route path="/application-success" element={<ApplicationSuccess />} />
        </Routes>        
      </div>
    </Router>
    
  )
}

export default App
