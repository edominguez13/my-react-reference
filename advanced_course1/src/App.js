//import logo from './logo.svg';
import './App.css';

import { users, desserts } from "./assets/mock_data.js";

import BasicList from './components/BasicList';
import FoodListByCalories from './components/FoodListByCalories.js';



function App() {
  return (
    <div>
        <BasicList data={users} />
        <FoodListByCalories data={desserts} />
    </div>
  );
}

export default App;
