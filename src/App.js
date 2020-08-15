import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from "./Project files/TodoList";
import TodoController from "./Project files/TodoController";
import axios from 'axios';

function App() {


const [list, setList] = useState([])


const addNewTodo = async (newTitle) => {
    await axios.post('http://localhost:5000/todo', {
            name: newTitle, done:true, _id: Math.random() })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    await axios.get('http://localhost:5000/todo')
        .then(function (response) {
            const listFromServer = response.data
            // handle success
            console.log(listFromServer);
            setList(listFromServer)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
                 })

        // const newTodo = {_id: Math.random(), name: newTitle, done: false}
        // const newList = [...list, newTodo]
        // setList(newList)
    }
    const deleteTodo = (_id) => {
        const newList = [...list].filter(el => el._id !== _id)
        setList(newList)
    }
    const updateTodo = (newTitle, id) => {
        const newList = list.map((el) => {
            if (id === el._id) return {...el, title: newTitle}
            return el
        })
        setList(newList)
    }
    const markTodo = (_id) => {
        const newList = list.map((el) => {
            if (el._id === _id) return {...el, done: !el.done}
            return el
        })
        setList(newList)
    }
    const moveUp = (index) => {
        if (index === 0)
            return
        const newList = list.map((el, i) => {
            if (index === i + 1) return list[index];
            if (index === i) return list[index - 1];
            return el
            })
        console.log(newList)
        setList(newList)


    }
    const moveDown = (index) => {
            const newList = list.map((el, i) => {
            if (index === i) return list[index + 1];
            if (index === i - 1) return list[index];
            return el
        })
        setList(newList)

    }
    useEffect( ()=> {
        axios.get('http://localhost:5000/todo')
            .then(function (response) {
                const listFromServer = response.data
                // handle success
                console.log(listFromServer);
                setList(listFromServer)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])
    // axios.post('http://localhost:5000/todo', {
    //     name: 'AxelP',
    //     editMode: true
    // })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    //id, title, done
    return (
        <div>
            <TodoController addNewTodo={addNewTodo}/>
            <TodoList list={list}
                      deleteTodo={deleteTodo}
                      updateTodo={updateTodo}
                      markTodo={markTodo}
                      moveUp={moveUp}
                      moveDown={moveDown}

            />


        </div>
    );
}


export default App;
