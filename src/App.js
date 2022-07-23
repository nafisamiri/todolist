import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <Navbar />
    </div>

  );
}

export default App;
