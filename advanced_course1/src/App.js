//import logo from './logo.svg';
import './App.css';

import { users, desserts, toDoData } from "./assets/mock_data.js";

import BasicList from './components/BasicList';
import ControlledForm from './components/ControlledForm.js';
import CreateAccountForm from './components/CreateAccountForm.js';
import FeedbackForm from './components/FeedbackForm.js';
import FoodListByCalories from './components/FoodListByCalories.js';
import ToDoList from './components/ToDoList.js';
import UncontrolledForm from './components/UncontrolledForm.js';
import { UserContextConsumer } from './components/UserContextConsumer.js';
import { UserProvider } from './providers/UserContext.js';


function App() {
  return (
    <div>
      <UserProvider>
        <FoodListByCalories data={desserts} />
        {/* Example of the correct use of Keys with the map function */}
        <ToDoList data={toDoData} />
        <UncontrolledForm />
        <ControlledForm />
        <FeedbackForm />
        <CreateAccountForm />
        <UserContextConsumer />
      </UserProvider>
    </div>
  );
}

export default App;
