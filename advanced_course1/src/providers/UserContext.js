// Context Creation:

// 1 Step:
/* import the create Context function:
    The createContext function returns a new context object                                                                 */
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

// 2 Step:
/* Context creation:
    The function argument is the default value, in this case is undefined because, since
    the app doesnt know before hand whose the logged user will be
    
    When creating an API for context consumers via useContext, what’s the argument you have to provide to the useContext call?

        The Context object obtained via the createContext call. 
        In this case UserContext.                                                                                           */
const UserContext = createContext(undefined);

// 3 Step:
/* Create a Provider Component:

    In this case we will name it UserProvider because it will use the UserContext.

    The Provider component returns the Context.Provider component that allows the context consuming components to
    subscribe to context changes. 

    The Context.Provider component accepts a value prop (property) which is what will be passed to consuming components
    that are descendants of this Provider component.

    For this App the value prop will have a sample authenticated user info object. And as Context is a global state, we create
    a state with useState hook.

        In a real world scenario we will have to fetch the user info and then set it as State.                               */
export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: "Enrique",
        email: "john@example.com",
        dob: "01/01/2000",
    });

    return <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
}

// 4 Step:
/* Create a way for components to subcribe to the context:
    We can do this by creating a custom Hook that wraps the useContext hook.

    Which is the way to consume a context value.
    
    This is external function is created for convenience, so we don't have to export the UserContext to extarnal components. */
export const useUser = () => useContext(UserContext);

// 5 Step
/* Wrap the App component with the UserProvider component:

        The user context is defined and we now have to make the app aware of it.

        Go to index.js and wrap the App component with the Provider component.      
        
        // index.js
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
            <React.StrictMode>
                <UserProvider>
                <App />
                </UserProvider>
            </React.StrictMode>
        );
*/

// 6 Step
/* Consume the context:

    create an user instance of the custom hook useUser inside the component that
    will use the context data.                                                      
    
    Example:
        import { useUser } from "../providers/UserContext";

        export const UserContextConsumer = () => {
            const { user } = useUser();

            return <h2>The name of the mock authenticated user is {user.name} </h2>
        }                                                                                        
        */



