import React from "react";


/* Create the context, dont forget the parenthesis to call the method */
const MealsContext = React.createContext();

const todaysMeals = [
    "Baked Beans",
    "Baked Sweet Potatoes",
    "Baked Potatoes"
];

/* The children arguments are the children components to be wraped in the MiniApp_MealsCounter file */
const MealsProvider = ({children}) => {
    
    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
     
        <MealsContext.Provider value={{meals}}> 
        {/* Add the data for the context with the value property above*/}
        {/* Give context to the wrapped children */}
            {children}
        </MealsContext.Provider>
    );
}

/* This makes easier to use the data of the context, check MealsList component */
export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;