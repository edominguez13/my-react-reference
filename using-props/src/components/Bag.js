function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
        backgroundColor: "coral",
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag