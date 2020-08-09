import React, {useState} from 'react';
import '../App.css';

function TodoController(props) {
    const [newTodo, setNewTodo] = useState("")
    const buttonHandler = () => {
        props.addNewTodo(newTodo)
        setNewTodo("");
    }
    return (
        <div>
            <center>
                {"name of new Task"}
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button onClick={buttonHandler}> addNewTodo</button>


            </center>
        </div>
    );
}

export default TodoController;
