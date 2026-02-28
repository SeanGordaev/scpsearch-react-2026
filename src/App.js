import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { SE } from './pages/SE.js';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className='app'><Home/></div>}/>
        <Route path='/SE' element={<SE/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
