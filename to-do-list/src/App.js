import React, { useState } from "react";
import "./App.css";
import NoToDo from "./components/no-to-do/NoToDo";
import ToDoList from "./components/toDoList/ToDoList";

const App = () => {
  const [ClassDecider, setClassDecider] = useState(false);
  const [note, setnote] = useState("");
  const [toDoList, settoDoList] = useState([1234]);

  const handleChange = (e) => {
    setnote(e.target.value);
  };

  const createNewNote = () => {
    settoDoList((prevlist) => [
      ...prevlist,
      {
        task: note,
        completed: false,
      },
    ]);
  };

  const createClickHandler = () => {
    setClassDecider(!ClassDecider);
    let a = prompt("Enter the Name of To do List :-");
  };
  return (
    <div className="App">
      {toDoList.length > 0 ? (
        <ToDoList
          toDoList={toDoList}
          note={note}
          changeHandler={handleChange}
          createNewNote={createNewNote}
        />
      ) : (
        <NoToDo onClick={createClickHandler} ClassDecider={ClassDecider} />
      )}
    </div>
  );
};

export default App;
