/*
React.Children is a utility for dealing with this.props.children and performing 
operations on each child without knowing their type. It provides a way to map, 
forEach, count, and manipulate the children of a React component.

React.cloneElement is a function that creates a new React element (a clone) 
with a new set of props, optionally merging with the existing ones. It's commonly 
used to add or modify props of a single child element.
*/


import * as React from "react";


const Row = ({ children, spacing }) => {
    const childStyle = {
        marginLeft: `${spacing}px`,
    };

    return (
        <div className="Row">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style, // copying the children style
                        ...(index > 0 ? childStyle: {}), // conditionaly adding the new style to the newly created elements.
                        // in this case the first element of the list doesnt need spacing.
                    },
                });
            })}
        </div>
    );
}

export default function LiveOrders() {
    return (
        <div>
            <Row spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>$30</p>
                <p>10:30 AM</p>
                <p>John</p>
            </Row>
        </div>
    )
}