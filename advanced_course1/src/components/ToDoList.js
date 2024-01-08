/* In this example we render a table instead of an unordered list
 */


import { useState } from 'react';
import { ToDo } from './ToDo';


const ToDoList = props => {

    const [ toDos, setToDos ] = useState(props.data);

    const reverseOrder = () => {
        /* Never mutate the original data, use the spread operator to create a copy and then mutate the copy */
        setToDos([...toDos].reverse());
    }

    return (
        <div>
          <button onClick={reverseOrder}>Reverse</button>
          <table>
            <tbody>
              {toDos.map((todo, index) => (
                <ToDo id={todo.id} key={todo.id} createdAt={todo.createdAt} />
              ))}
            </tbody>
          </table>
        </div>
    )
}

export default ToDoList;