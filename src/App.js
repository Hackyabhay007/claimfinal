import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Compoents/Home';
import Claimables from './Pages/Claimables ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path='/claimables' element={<Claimables />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
