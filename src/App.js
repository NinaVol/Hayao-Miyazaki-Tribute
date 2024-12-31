import React, { useEffect, useState } from 'react'; 
import ClipLoader from "react-spinners/ClipLoader";
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

function App() {

  const [stateLoader, setStateLoader] = useState(true); 

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
    });

    const timer = setTimeout(() => setStateLoader(false), 2000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {stateLoader ? (
        <div className="loader-container">
          <ClipLoader color={'#EDFF24'} size={90} />
        </div>
      ) : (
        <Router>
          <nav>
            <Link to='/home' className='link'>Home</Link>
            <Link to='/biography' className='link'>Biography</Link>
            <Link to='/Films' className='link'>Films</Link>
            <Link to='/Watch' className='link'>Watch</Link>
          </nav>

          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='/films' element={<Films />} />
            <Route path='/watch' element={<Watch />} />
          </Routes>
        </Router>
      )}
      <Footer />
    </div>
  );
}

export default App;
