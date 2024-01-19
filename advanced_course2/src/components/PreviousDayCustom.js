/* This is an example of a custom hook 'usePrevious' that gets the parameter of 
the current state and shows it every time the value of the current day changes.

useEffect is the favorite state for this it seems.
useRef is used in this example to create an object that will receive the value and then return it.

https://react.dev/reference/react/useRef*/

import { useState, useEffect, useRef } from "react";

export default function PreviousDayCustom() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef();
  useEffect(
    () => {
      ref.current = val;
    }, [val])
  return ref.current;

}
