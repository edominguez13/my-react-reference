import { useState, useEffect } from "react";

const FetchRandomUser = () => {
    const [ user, setUser ] = useState([]);


    /* Placing the function outside of the useEffect to then invoke it makes the code more readable. */
    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json()) // response.json() turns the json responce into a javascript object.
            .then(data => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    /* Object.keys(object) returns an arraoy of the object keys */
    /* This return statement has a ternary operator in case of the fetching process taking more time than required or failing 
    
    We can test the ternary operator by artificially slowing the internet in the dev tools of the browser->network-> change no throttling to slow 3g*/
    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Data returned</h1>
            <img src={user.results[0].picture.thumbnail}></img>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Data pending...</h1>
    );
}

export default FetchRandomUser;