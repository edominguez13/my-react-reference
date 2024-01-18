import { useState } from "react";

const GoalForm = (props) => {

    // This variable is used by useState and submitHandler to set the initial value of formData
    const emptyForm = { goal:"", by: "" };

    // Creation of the form State
    const [ formData, setFormData ] = useState(emptyForm);

    // Function for the onChange Listener
    /* Every Listener generates an event object that includes information of the trigger element
    known as target.
    
    in this case the custom argument "e", "event" or whatever you want to call it is the event object.
    
    the target sub-object is the element and you can access its properties with the dot notation.
    
    in this case: name and value*/
    const changeHandler = e => setFormData({...formData, [e.target.name]: e.target.value});

    // Function for the submit button
    /* Always prevent default in this one, because it will make a get request to a server and refresh the page.
    
    the props.onAdd function requires a goal parameter for the props function passed through the component, 
    to update the state of the main component.
    
    Then setFormData resets the value of the GoalForm component*/
    const submitHandler = e => {
        e.preventDefault();
        props.onAdd(formData);
        setFormData(emptyForm);
    };


    return (
        <>
            <h1>Goal List App</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
                <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler}/>
                <button>Submit Goal</button>
            </form>
        </>
    );
}

// Using the App component via a prop
/* This component gets the state of the main component via a prop property and maps it to a unordered list */
const ListOfGoals = props => {
    return (
        <ul>
            {props.allGoals.map(
                (g) => (
                    <li key={g.goal}>
                        <span>My goal is to {g.goal}, by {g.by}</span>
                    </li>
                )
            )}
        </ul>
    );

}

// Main component
/* Updates its value with the help of a sub-component, by pasis the setState function as a prop */
const GoalsListApp = () => {

    const [ allGoals, updateAllGoals ] = useState([]);

    const addGoal = goal => updateAllGoals([...allGoals, goal]);

    return (
        <div>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    );
}

export default GoalsListApp;