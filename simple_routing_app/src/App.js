import logo from './logo.svg';
import './App.css';

import Homepage from './components/Homepage';
import About from './components/About';

import { Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <nav>
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/about-us' className='nav-item'>About Us</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
