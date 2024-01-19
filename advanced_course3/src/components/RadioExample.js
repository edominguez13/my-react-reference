/* This is a very smart example of using React.Children.map and React.cloneElement 

In this case RadioExample is the main component.

The radio options component keeps it state with the useState hook and creates the selected and setSelected variable and function

The RadioGroup gets 2 props, the selected empty string and the setSelected function.

Each RadioOption gets the prop value that is the same as its text

The RadioGroup component maps its children giving them the onChange and checked props. the onChange prop is the setSelected function
and the checked prop is a logical expression that compares the state (the selected variable) to the value prop of the component that returns
a boolean value.

the onChange prop gives the assigns the value prop value to the selected state value, then when re-rendering each RadioOption will make the
comparison in the checked prop and only one will have the value of "True"*/

import * as React from "react";
import { useState } from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 

function RadioExample() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default RadioExample;