//import logo from './logo.svg';
import './App.css';

import { users, desserts, toDoData } from "./assets/mock_data.js";

import BasicList from './components/BasicList';
import ControlledForm from './components/ControlledForm.js';
import FoodListByCalories from './components/FoodListByCalories.js';
import ToDoList from './components/ToDoList.js';
import UncontrolledForm from './components/UncontrolledForm.js';



function App() {
  return (
    <div>
        <BasicList data={users} />
        <FoodListByCalories data={desserts} />
        {/* Example of the correct use of Keys with the map function */}
        <ToDoList data={toDoData} />
        <UncontrolledForm />
        <ControlledForm />
    </div>
  );
}

export default App;
