//import logo from './logo.svg';
import './App.css';

import Apples from "./components/Apples"
import Pears from "./components/Pears"
import Bag from "./components/Bag"


// import React from 'react';

function App(props) {
  console.log(props);
  return (
    <div className="App">
        <h1>Hello {props.username}, you birthday is {props.birthday}</h1>
        {/* Using the bag component as a wraper for styling purposes and the props.childern property we can nest components inside components */}
        <h2>------------</h2>
        <Bag children={<Apples color="Blue" number="5"/>} />
        <Bag children={<Pears friend="Peter" />} />
        <h2>------------</h2>
        <Bag> 
          <Apples color="Blue" number="5"/>
        </Bag>
        <Bag> 
          <Pears friend="Peter" />
        </Bag>
        <h2>------------</h2>

        <Bag> 
          <Apples color="Blue" number="5"/>
          <Pears friend="Peter" />
        </Bag>
        <h2>------------</h2>

    </div>
    

  );
}

export default App;
