import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import Addtodos from './MyComponents/Addtodos';
import { useState, useEffect } from "react";
import React from 'react'
function App() {

  const onDelete = (todo) => {
    const newTodos = todosP.filter((e) => e !== todo);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodoF = (title, desc) => {
    let sno;
    if (todosP.length === 0) {
      sno = 0;
    } else {
      sno = todosP[todosP.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    const newTodos = [...todosP, myTodo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const [todosP, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <>
      <Header title="To-Do List" searchBar={false} />
      <Addtodos addTodo={addTodoF} />
      <Todos todos={todosP} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
