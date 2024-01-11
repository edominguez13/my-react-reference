/* This is an example of an Uncontrolled component.

Used useRef to get the value of the input component when the submit button is pressed.
*/


import { useRef } from "react";

const UncontrolledForm = () => {

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // I prevented the default in order to avoid making a GET request and refreshing the page.
        const inputValue = inputRef.current.value;
        console.log("this is the value after submit + 2", inputValue + 2);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="name-uncontrolled">Name:</label>
                        <input
                            /* The id and name attributes serve different purposes, 
                                the id connects the input element to the label element 
                                and the name attribute is the name (to identify the purpose) 
                                of the input element
                            */
                            id="name-uncontrolled"
                            name="name-uncontrolled"
                            type="text"
                            ref={inputRef}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>

            </form>
        </div>
    )
}

export default UncontrolledForm;