// import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

import Logo from './components/Logo';
import Btn from './components/Btn';
import InputComponent from './components/inputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';

import MiniAppMealsCounter from './components/MiniAppMealsCounter';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Heading>
        <Logo />
      </Heading>
      <Nav />
      <Btn />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
      <MiniAppMealsCounter />
    </div>
  )
}

export default App;
