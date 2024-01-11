/* This is an example of a controlled component.

To become a controlled component you have to:

1- use a local state
2- set a value property on the form element
3- set an onChange property to listen and save the user inputs on the state
4- create a handleSubmit function that handles the onSubmit property of the form
5- delete the default behaviors of the html elements like the submit function
6- its good practice to Conditionally disable a submit button 
7- we can also enforce specific input formats

*/

import { useState } from "react";

const ControlledForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form submitted");
    };

    const handleChange = (e) => setName(e.target.value)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="name">Name:</label>
                        <input
                            /* The id and name attributes serve different purposes, 
                                the id connects the input element to the label element 
                                and the name attribute is the name (to identify the purpose) 
                                of the input element
                            */
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            // onChange={(e) => setName(e.target.value)} 
                            onChange={handleChange}
                        />
                    </div>
                    {/* the 'disabled' property receives a bool value, if the name is empty then "" = 0 = false */}
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>

            </form>
        </div>
    )
}

export default ControlledForm;