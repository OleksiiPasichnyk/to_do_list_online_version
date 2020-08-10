import React from 'react';
import '../App.css';
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const todoList = props.list;

    return (
        <div>
            <center>

                {todoList.map((el, index) =>
                    <TodoListItem key={el.id}
                                  el={el}
                                  deleteTodo={props.deleteTodo}
                                  updateTodo={props.updateTodo}
                                  markTodo={props.markTodo}
                                  index={index}
                                  moveUp={props.moveUp}
                                  moveDown={props.moveDown}
                                  listLength = {todoList.length}
                    />
                )}

            </center>
        </div>
    );
}

export default TodoList;
