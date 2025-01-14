import React, { useEffect, useState } from 'react'; 
import './App.css';
import HomePage from './HomePage';
import Footer from "./Footer";
import Watch from './Watch';
import "aos/dist/aos.css";
import AOS from "aos";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Biography from './Biography';
import Films from './Films';
import Merch from './Merch';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
    });
  }, []);

  return (
    <div>
      
        <Router>
          <nav>
            <Link to='/home' className='link'>Home</Link>
            <Link to='/biography' className='link'>Biography</Link>
            <Link to='/Films' className='link'>Films</Link>
            <Link to='/Watch' className='link'>Watch</Link>
            <Link to='/Merch' className='link'>Merch</Link>
          </nav>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='/films' element={<Films />} />
            <Route path='/watch' element={<Watch />} />
            <Route path='/merch' element={<Merch/>} />
          </Routes>
        </Router>
    
      <Footer />
    </div>
  );
}

export default App;
