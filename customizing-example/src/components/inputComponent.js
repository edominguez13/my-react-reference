/* Hooks */

/* We import the useState function to create the state variable and the function that will 
update the state */
import { useState } from 'react';

export default function InputComponent() {

    /* This is an example of array destructuring */
    /* The variables can have anyname and usually the names relate to the purpose */
    /* inputText holds the state */
    /* setText updates the value of inputText */
    const [inputText, setText] = useState('hello');

    /* This function is called when the input bar listens the onChange when the user types anything */
    function handleChange(e) {
        setText(
            /* {e} is the event, which in this case is change, 
            {target} is the element that triggered the event, which in this case is the input, and 
            {value} is the value of the input element */
            e.target.value
            );
    }

    return (
        <> <br></br>
            <h1>--Using the useState Hook--</h1>
            <p>the <strong>useState hook</strong> does two things. It creates a state variable 
            with an initial value that represents the current state, which in this example is 
            <em>inputText</em>. And it creates a function to set that states variable value, which in this case is <em>setText</em>.</p>

            {/* onChange will is an event listener that calls the funcition each tine the value of 
            input.value changes in this case the inputText variable */}
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>

            {/* this button only gives the 'hello' value to the variable, in this case is the first value assingned tu the variable inputText */}
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </>
    );
} 