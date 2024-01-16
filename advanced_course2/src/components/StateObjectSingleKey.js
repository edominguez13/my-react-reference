import { useState } from "react"; 
 
export default function StateObjectSingleKey() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  //console.log(greeting, setGreeting); 
    let count = 0;
  function updateGreeting() { 
    const newGreeting = {...greeting, hola:"hola"}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
    console.log(greeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 