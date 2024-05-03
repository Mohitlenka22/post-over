import './App.css';
import React, { useEffect, useState } from 'react';
import axios from './axios'
import Header from './Header';
import TinderCards from './TinderCards';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Content from './Content';
import Footer from './Footer';

function App() {
  const [people, setPeople] = useState([]);
    
  useEffect(() => {
      async function fetchData() {
          const req = await axios.get('/get');
          setPeople(req.data)
          
      }
  fetchData()
  }
  
   , []);
  return (
    <div className="app">
       <Header/>
       <Router>
        <Routes>
          <Route path='/' element={ <TinderCards people={people}/>} />
          <Route path='/upload' element={<Content/>} />
        </Routes>
      </Router>
       <Footer/>
    </div>
  );
}

export default App;
