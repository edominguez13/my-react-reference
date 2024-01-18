// useEffect hook
/*
    You have been introduced to the primary usage of the useEffect hook, a built-in React hook best suited to perform side effects in your React components.

    side effects make a function impure.

    Pure functions receive arguments and does something and returns the same given the same arguments.

    Impure functions do something outside of the function.


    Examples of side effects: 
    - interacting with the DOM or document.
    - fetching data from a server
    - use an external API, like console.log() for example
    - invokes browsers geolocation
    - among others
*/


import { useState, useEffect } from "react";

export default function UseEffectExample() {
    const [toggle, setToggle] = useState(false);
    const [loggedIn, SetLoggedIn] = useState(true);

    const clickHandler = () => setToggle(!toggle);

    useEffect(
    // The callback function
        /* This runs after everything is rendered because it could perform a heavy task
        
        to logOut automaticly you can return another function for clean up*/
        () => {
        document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook";

        // Effects with Cleanup
            /* Some side effects may need to clean up resources or memory that is not required anymore, avoiding any memory leaks that could slow down your applications.

                For example, you may want to set up a subscription to an external data source. In that scenario, it is vital to perform a cleanup after the effect finishes its execution.

                How can you achieve that? In line with the previous point of splitting the code based on what it is doing, the useEffect hook has been designed to keep the code for adding and removing a subscription together, since it’s tightly related. 

                If your effect returns a function, React will run it when it’s time to clean up resources and free unused memory. */
        return () => SetLoggedIn(false);
    }
    // The dependecy array
        /* The dependency array is the second argument of the useEffect hook, it serves the purpose o 
        re-rendering the function inside the useEffect hook based on conditions. */
            //Case 1 : No dependency array
                /* This means that the function will re-render everytime*/
            // Case 2: empty array
                /* This means that the function will run only once */
    //,[] // comment this line if not used
            // Case 3: variables inside of the array
               /* The function will run every time the value changes */   
    ,[toggle] // comment this line if not used
    )

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>
                Toggle message
            </button>
            {/* JSX expression that conditionaly shows an html element */}
            {toggle && <h2>Welcome to Little Lemon</h2>}
        </div>
    )
}