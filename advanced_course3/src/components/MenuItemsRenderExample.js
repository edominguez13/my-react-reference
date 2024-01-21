// Render props
/* The end goal is the same as HOC, to enhance the business logic or functionality of a component.

the render prop take a function that renders html code, and this function */

/*
The render function:
The purpose of the function is to display the specified HTML code inside the specified HTML element. 
In the render() method, we can read props and state and return our JSX code to the root component of our app. 
*/

import { useState, useEffect } from "react";


/* Fetching data is a cross-cutting concern that is basic and can be used by many components, this is why it's smart
to isolate that functionality, and enhance or add it to the components when necessary */
const DataFetcher = ({ render, url }) => {
    const [ data, setData] = useState([]);

    /* a mock fetching operation */
    useEffect(
        () => {
            if (url.includes("desserts")) {
                setData(["cake","ice cream","pie","brownie"]);
            } else {
                setData(["water", "soda", "juice"])
            }
        }, []);

    /* Returns the render function being invoked with the data as an argument. 
    this lives freedom to the developers to show the data in any format they desire */
    return render(data);
}

// Presentational components that make use of the data fetcher"

// showing the data in paragraph
const DessertsCount = () => {
    return (
        <DataFetcher 
            url="https://littlelemon/desserts"
            render={(data) => <p>{data.length} desserts</p>}
        />
    );
};


// showing the data in h3
const DrinksCount = () => {
    return (
        <DataFetcher 
            url="https://littlelemon/drinks"
            render={(data) => <h3>{data.length} desserts</h3>}
        />
    );
};


const MenuItemsRenderExample = () => {
    return (
        <>  
            <h2>Little Lemon menu includes:</h2>
            <DessertsCount />
            <DrinksCount />
        </>
    )
}

export default MenuItemsRenderExample;