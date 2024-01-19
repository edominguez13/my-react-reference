/* The spread operator is useful to avoid repeating oneself

if we want to pass many of the same props to components we only have to create a variable

and if we only what to modify a single prop from the default ones, we one need to update the object using the spread operator

The place where you put the spread operator object is important*/

const Button = ({children, ...buttonProps}) => {
    return (
        <button {...buttonProps} >{children}</button>
    )
}


const SpreadProps = () => {
    const defaultProps = {
        onClick: () => alert("Default"),
        color:"blue",
        style:{color: 'blue'},
    }
    return (
        <>
            <Button {...defaultProps}>One</Button>
            <Button 
                {...defaultProps} 
                onClick={() => alert("Changed")}>Two
            </Button>
            <Button 
                onClick={() => alert("Changed")} 
                {...defaultProps} style={{color:"red"}}
                >Three
            </Button>

        </>
    )
}


export default SpreadProps;