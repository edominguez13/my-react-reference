//import logo from './logo.svg';
import './App.css';

import users from "./assets/mock_data.js";

import BasicList from './components/BasicList';

function App() {
  return (
    <BasicList data={users} />
  );
}

export default App;
