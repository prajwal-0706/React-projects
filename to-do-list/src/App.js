import React, { useState } from "react";
import "./App.css";
import NoToDo from "./components/no-to-do/NoToDo";
import ToDoList from "./components/toDoList/ToDoList";

const App = () => {
  const [ClassDecider, setClassDecider] = useState(false);
  const [toDoList, settoDoList] = useState([1234]);

  const createClickHandler = () => {
    setClassDecider(!ClassDecider);
    let a = prompt("Enter the Name of To do List :-");
  };
  return (
    <div className="App">
      {toDoList.length > 0 ? (
        <ToDoList />
      ) : (
        <NoToDo onClick={createClickHandler} ClassDecider={ClassDecider} />
      )}
    </div>
  );
};

export default App;
