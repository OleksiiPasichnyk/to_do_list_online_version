import React, {useState} from 'react';
import '../App.css';
function TodoListItem(props) {
    const {el, updateTodo, index, listLength} = props
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
            <li  key = {el.id} style={style}>
                <>
                    <input type="checkbox" checked={el.done} onChange={() => props.markTodo(el.id)}/>
                    {el.title}
                    {editMode ? <> <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                            <button onClick={editButtonHandler}> Save</button>
                        </>
                        :
                        <>
                            <button onClick={() => props.deleteTodo(el.id)}> delete</button>
                            <button onClick={() => setEditMode(!editMode)}>Edit</button>
                            <button disabled={!index} onClick={() => props.moveUp(props.index)}>↑</button>
                            <button disabled={index===(listLength -1)}
                                    onClick={() => props.moveDown(props.index)}>↓
                            </button>

                        </>}
                </>

            </li>
        </div>
    );
}

export default TodoListItem;

