// useReducer hook
/* It's better than the useState hook for complex data types because if you want complex functionality that
depends on the behavior of the user, you are better of using useReducer.

You can achieve the same with useState hook by creating a bunch of 'handler' functions but the code would become 
extense and hard to maintain.

With the useReducer hook you create a reducer function that takes as arguments the state and an action to be performed based
on the used listener that will have the 'dispatch' function instead of the setState fuction used in useState. the dispatch function
receives an object that can have many instructions, in this example we only use the action.type property that specifies the course of action
that will affect the state of the component.*/
import { useReducer } from "react";

/* The reducer function uses the app state and the action object that is passed through the dispatch function */

/* The only downside of this method is that you take a little more time to set up that useState */
const reducer = (state, action) => {
    if (action.type === "buy_ingredients") return {...state, money: state.money - 10};
    if (action.type === "sell_a_meal") return {...state, money: state.money + 10};
    /* Example of how easy is to add more functionality and using other keys for the object */
    if (action.auto_robbery) return {...state, money: 0 };
}

const UseReducerExample = () => {
    /* The initial state in this case is and object that track the account balance of a restaurant */
    const initialState = {money: 100};

    /* the use reducer takes the reducer function and the initial state an returns two elements
    the state and the dispatch function.
    
    the state is the state of the component and the dispatch is the function that sends the instruction to 
    the reducer function that handles the functionality that affefcts the state.*/
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() =>dispatch({type: 'buy_ingredients'})}>Shopping for veggies</button>
                <button onClick={() =>dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
                <button onClick={() =>dispatch({auto_robbery: true})}>Say hi</button>
            </div>
        </div>
    )
}

export default UseReducerExample;