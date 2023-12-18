function Btn() {

    const clickHandler = () => console.log("Clicked!");

    const mouseOverHandler = () => console.log("Mouse placed over!")



    return (
        <button onClick={clickHandler} onMouseOver={mouseOverHandler}>
            Click me!
        </button>
    )
}

export default Btn;