import React, {useState} from 'react';
import '../App.css';
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const todoList = props.list;

    return (
        <div>
            <center>

                {todoList.map(el =>
                    <TodoListItem el={el} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo} markTodo = {props.markTodo}/>
                )}

            </center>
        </div>
    );
}

export default TodoList;
