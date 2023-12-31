// transforming the data
const BasicList = (props) => {
    const data_list = props.data.map(person => {
        const user_fullName = `${person.first_name} ${person.last_name}`
        return (
            <li>{user_fullName}</li>
        )
    });
    console.log(data_list);

    return (
        <div>
            <ul>
                {data_list}
            </ul>
        </div>
        
    )
}

// using the data
export default BasicList;