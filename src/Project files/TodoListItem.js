import React, {useState} from 'react';
import '../App.css';
import TodoList from "./TodoList";

function TodoListItem(props) {
    const {el, updateTodo} = props
    const [editTitle, setEditTitle] = useState(el.title)
    const editButtonHandler = () => {
        updateTodo(editTitle, el.id)
        setEditMode(false)
        setEditTitle("");
    }
    const style = el.done === true ? {"textDecoration": "line-through"} : null;
    const [editMode, setEditMode] = useState(false)
    return (
        <div>
            <li key={el.id} style={style}>
                <input type="checkbox" checked={el.done} onClick={() => props.markTodo(el.id)}/>
                {el.title}
                <button onClick={() => props.deleteTodo(el.id)}> delete</button>
                {editMode && (<div>
                    <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                    <button onClick={editButtonHandler}> Save</button>
                </div>)}
                <button onClick={() => setEditMode(!editMode)}>Edit</button>
            </li>
        </div>
    );
}

export default TodoListItem;

