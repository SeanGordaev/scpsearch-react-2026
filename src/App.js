import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { SE } from './pages/SE.js';
import { Data } from './components/data.js';
import { WP } from './pages/WormProtocol.js';
import './App.css';

function App() {
  return (
    <Data>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='app'><Home/></div>}/>
          <Route path='/SE' element={<SE/>}/>
          <Route path='/WP' element={<WP/>}/>
        </Routes>
      </BrowserRouter>
    </Data>
  );
}

export default App;
