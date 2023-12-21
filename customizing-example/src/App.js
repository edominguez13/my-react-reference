// import logo from './logo.svg';
import './App.css';

import MiniAppFirstExample from './components/MiniAppFirstExample';

import InputComponent from './components/inputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';

import MiniAppMealsCounter from './components/MiniAppMealsCounter';
import MiniAppUseReducer from './components/MiniAppUseReducer';

function App() {
  return (
    <div className="App">
      <MiniAppFirstExample />
      {/* useState examples: */}
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
      {/* useContext example */}
      <MiniAppMealsCounter />
      {/* useReducer Example: */}
      <MiniAppUseReducer />
    </div>
  )
}

export default App;
