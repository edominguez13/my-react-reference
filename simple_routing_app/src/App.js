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
        {/* The route component can have a opening and closing version */}
        <Route path='/about-us' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
