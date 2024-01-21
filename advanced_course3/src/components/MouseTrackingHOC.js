// Higher Order Components
/* They are functions that add functionality to components.

Characteristics:
-They take a component as an argument and return and enhanced component with aditional business logic inside a prop.
-Reduce code repetition.
-Can take more arguments with the Wrapped component
-Dont modify the wrapped component, just add functionality or data
-cannot be defined or used inside another component for app performance issues and unpredictable behavior

Always name your HOC functions 
*/
import { useState, useEffect } from "react";

/* The with part of the name is a general convention recommended by React since it expresses the enhancing nature of the technique.

with + what you will add, in this case, the mousePosition*/
const withMousePosition = (WrappedComponent) => {

    /* takes the props of the wrapped component */
    return (props) => {

        /* creates a local state that will save the tracking position */
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0,
        });

        /* this hooks control how many times the action should be performe */
        useEffect(
            () => {
                /* the event object created by the listener has the properties for the mouse position */
                const handleMousePositionChange = (e) => {
                    setMousePosition({
                        x: e.clientX,
                        y: e.clientY,
                    });
                };

                /* this adds to the window object the listener 'mousemove' and the handler defined earlier */
                window.addEventListener("mousemove", handleMousePositionChange);

                /* It's important to remove any subscription when your component unmounts.  */
                return () => {
                    window.removeEventListener("mousemove", handleMousePositionChange);
                };
            },
            /* this action will only be performed once */
            []
        );

        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    }
}


const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <div>
            <p>Mouse Position:</p>
            <div className="Row">
                <span>x: {mousePosition.x} </span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );

}


const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

const MouseTrackingHOC = () => {
    return (
        <div>
            <h2>Little Lemon Restaurant</h2>
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>
    )
}

export default MouseTrackingHOC;