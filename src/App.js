import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import People from './components/People';
import Home from './components/Home';
import Planets from './components/Planets';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/people' element={<People/>} />
          <Route path='/planets' element={<Planets/>} />
        </Routes>
      </Router>
  );
}

export default App;
