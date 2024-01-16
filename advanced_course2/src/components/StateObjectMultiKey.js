import { useState } from "react"; 
 
export default function StateObjectMultiKey() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  //console.log(greeting, setGreeting); 





  // Both methods do the same 
 //Method 1
/*   function updateGreeting() { 
     const newGreeting = {...greeting, hola:"hola"}; 
     newGreeting.place = "World-Wide Web"; 
     setGreeting(newGreeting); 
     console.log(greeting); 
   }*/ 

   //Method 2
function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
    //console.log(greeting);
  } 
 


 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 