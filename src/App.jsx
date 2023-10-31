import './Mainpage.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gamepage from './Gamepage';
import Home from './Home';
import End from './End';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path="/guess" element={<Gamepage />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
