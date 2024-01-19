// Component Composition
/* Component composition refers to working in a way that you create reusable components.

It has two parts:
1. Containment : a generic component that receives props that give it customization and content.
2. Specialization : taking that containment or generic component and giving it a specific task.

It looks similar to class inheritance to me.

you create a Button component that can be modified to become anytype of button

and a DeleteButton component that becomes a parent of the Button component and gives content and customization to it */


/* Note that in this example we se a new way to pass props, instead props.children */
const Button = ({ children, backgroundColor }) => {
    return <button style={{backgroundColor}}>{children}</button>
};  

const Alert = ({ children }) => {
    return (
        <>
            <div className="Overlay"></div>
            <div className="Alert">{ children }</div>
        </>
    )
}

const DeleteButton = () => {
    return <Button backgroundColor={"red"}>Delete</Button>
}

const ComponentCompositionExample = () => {
    return (
        <div>
            <header>Little Lemon Restaurant</header>
            <Alert>
                <h4>Delete Account</h4>
                <p>Are you sure?</p>
            </Alert>
            <DeleteButton />
        </div>
    )
}

export default ComponentCompositionExample;