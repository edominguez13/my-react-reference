/* The spread operator is used to keep the same data and only change a piece of it
when using hooks.
*/

var form = {
    name : 'enrique',
    age : 32
}

console.log(form);

var form = {
    name : 'pedro',
    age : 35
}

console.log(form);

var form = {
    ...form,
    age : 40
}

console.log(form);