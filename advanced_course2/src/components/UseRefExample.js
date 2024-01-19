// useRef hook
/* This is a basic hook that allows us to get access to the DOM elements */

import { useRef } from "react";

const UseRefExample = () => {
    /* The useRef hook returns an object that will be assigned to an HTML element as the value of 
    its 'ref' property */
    const formInputRef = useRef(null);

    /* This function handles the desired behavior that is, in this case, to focus the input element */
    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <>
            <h1>Using useRef to acces underlying DOM</h1>
            <input ref={formInputRef} type="text"/>
            <button onClick={focusInput}>
                Focus input
            </button>
        </>
    )
}

export default UseRefExample;