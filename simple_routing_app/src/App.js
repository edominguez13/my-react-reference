import logo from './logo.svg';
import './App.css';

import Homepage from './components/Homepage';
import About from './components/About';

import { Routes, Route, Link } from 'react-router-dom';

import LogicalAndExample from './components/LogicalAndExample';

import { CatImage, DogImage } from './components/AnimalPhotos';


const App = () => {
  return (
    <div className='App'>
      <CatImage />
      <DogImage />
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
      {/* Interesting examples of Conditional Rendering  */}
      <LogicalAndExample />
    </div>
  );
}

export default App;
