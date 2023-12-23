function LogicalAndExample() {
    const val = prompt('Anything but a 0') // if it's a 0, JS will read false and will not render the HTML element

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val && /* IF 0, the logical statement will be (false && true) = false. nothing will be rendered */
                <h2>Yay, no 0 was typed in!</h2>
            }
        </div>
    )
}

export default LogicalAndExample;