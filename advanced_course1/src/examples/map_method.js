// The use of map() for transforming operations

/* When we receive data from the server or a third party we dont always receive the data ready 
to use because of format used to send the data.

thats why we have to do transforming operations to use only the data needed, in order to render our
app.*/

// third-party data
const data = [
    {
        name : "Enrique",
        lastName : "Dominguez",
        age : 32,
        country : "Dominican Republic"
    },
    {
        name : "Paola",
        lastName : "Cruz",
        age : 28,
        country : "Dominican Republic"
    },
    {
        name : "Pierre",
        lastName : "Galee",
        age : 56,
        country : "Banana Republic"
    },
    {
        name : "Italo",
        lastName : "Jinapellido",
        age : 19,
        country : "Italy"
    },
];


// transforming the data
const fullNames = data.map(person => {
    return {
        fullName : `${person.name} ${person.lastName}`,
        country : person.country, /* added the country only for the example */
    }
})

// using the data
const printFullNames = () => console.log(fullNames);

printFullNames();