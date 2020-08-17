import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from "./Project files/TodoList";
import TodoController from "./Project files/TodoController";
import axios from 'axios';

function App() {


    const [list, setList] = useState([])


    const addNewTodo = async (newTitle) => {
        await axios.post('http://cryptic-shore-44131.herokuapp.com/todo', {
            name: newTitle, done: true, _id: Math.random()
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        await axios.get('http://cryptic-shore-44131.herokuapp.com/todo')
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
    const deleteTodo = async (_id) => {
        await axios.delete(`http://cryptic-shore-44131.herokuapp.com/todo/${_id}`, {})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        await axios.get('http://cryptic-shore-44131.herokuapp.com/todo')
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
    }
    const updateTodo = async (newTitle, _id) => {
        await axios.patch(`http://cryptic-shore-44131.herokuapp.com/todo/${_id}`, {name:newTitle})
            .then(function () {
                         })
            .catch(function (error) {
                console.log(error);
            });

        await axios.get('http://cryptic-shore-44131.herokuapp.com/todo')
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
    }
    const markTodo = async (_id, done) => {
        await axios.patch(`http://cryptic-shore-44131.herokuapp.com/todo/${_id}`, {done: !done})
            .then(function (response) {
            })

            .catch(function (error) {
                console.log(error);
            })
        await axios.get('http://cryptic-shore-44131.herokuapp.com/todo')
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
        axios.get('http://cryptic-shore-44131.herokuapp.com/todo')
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
