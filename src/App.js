import React, {useState} from 'react';
import './App.css';
import TodoList from "./Project files/TodoList";
import TodoController from "./Project files/TodoController";
import TodoListItem from "./Project files/TodoListItem";

function App() {
    const [list, setList] = useState(
        [{id: 1, title: "Object One", done: false},
            {id: 2, title: "Object Two", done: true},
            {id: 3, title: "Object Three", done: false}])
    const addNewTodo = (newTitle) => {
        const newTodo = {id: Math.random(), title: newTitle, done: false}
        const newList = [...list, newTodo]
        setList(newList)
    }
    const deleteTodo  = (id) => {
        const newList = [...list].filter(el => el.id !== id)
        setList(newList)
    }
        const updateTodo = (newTitle, id) => {
            const newList = list.map((el) => {
                if (id === el.id) return {...el, title:newTitle}
                return el


            })
            setList(newList)
    }
    const markTodo  = (id) => {
        const newList = list.map((el)=> {
            if (el.id === id) return {...el, done:!el.done}
            return el
        } )
        setList(newList)
    }

    return (
        <div>
            <TodoController addNewTodo = {addNewTodo}/>
            <TodoList list={list} deleteTodo={deleteTodo} updateTodo = {updateTodo} markTodo={markTodo} />



        </div>
    );
}


export default App;
