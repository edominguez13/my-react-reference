import logo from './logo.svg';
import './App.css';

import Homepage from './components/Homepage';
import About from './components/About';

import { Routes, Route, Link } from 'react-router-dom';

import LogicalAndExample from './components/LogicalAndExample';

import { CatImage, DogImage } from './components/AnimalPhotos';

import ImportedImages from './components/ImportedImages';
import MyVideo from './components/MyVideo';
import AudioToggle from './components/AudioToggle';


const App = () => {
  return (
    <div className='App'>
      <CatImage />
      <DogImage />
      <nav>
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/about-us' className='nav-item'>About Us</Link>
        <Link to='/mustang-images' className='nav-item'>Mustang Images</Link>
        <Link to='/my-video' className='nav-item'>My video</Link>
        <Link to='/audio-toggle' className='nav-item'>Audio Toggle</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<About />} />
        {/* The route component can have a opening and closing version */}
        <Route path='/mustang-images' element={<ImportedImages />}></Route>
        <Route path='/my-video' element={<MyVideo />}></Route>
        <Route path='/audio-toggle' element={<AudioToggle />} />
        
      </Routes>
      {/* Interesting examples of Conditional Rendering  */}
      {/* <LogicalAndExample /> */}
    </div>
  );
}

export default App;
