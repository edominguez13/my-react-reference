/* Custom hooks are made by adding functionality to a default hook

in this example we create a useConsoleLog with the useEffect hook*/

import { useState } from "react";
import { useEffect } from "react";

function useConsoleLog(varName) {
    useEffect(() => {
        console.log(varName);
    }, [varName]);
}


function CustomHookExample() {
    const [count, setCount] = useState(0);
    useConsoleLog(count);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <h1>Custom hook example - Count: {count}</h1>
            <button onClick={increment}>Plus 1</button>
        </div>
    );
}

export default CustomHookExample;