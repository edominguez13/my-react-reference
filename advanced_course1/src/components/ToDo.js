const ToDo = props => ( 
    <tr>
        {/* The parenthesis is the return statement */}
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input type="text" />
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);

export { ToDo };