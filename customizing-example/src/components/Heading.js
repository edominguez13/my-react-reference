function Heading(props) {
    return (
      <> {/* Always use a div or a empty element when using props children */}
      <h1>This is the Heading</h1>
      {props.children}
      </>
      
    )
  }

  export default Heading;