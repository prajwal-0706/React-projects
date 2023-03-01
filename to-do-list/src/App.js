import React, { useEffect, useState } from "react";
import "./App.css";
import NoToDo from "./components/no-to-do/NoToDo";
import ToDoList from "./components/toDoList/ToDoList";

const App = () => {
  const [ClassDecider, setClassDecider] = useState(false);
  const [note, setnote] = useState("");
  const [toDoList, settoDoList] = useState([]);
  const [Prompt, setPrompt] = useState("");

  useEffect(() => {
    if (toDoList.length === 0) {
      setClassDecider(false);
    }
  }, [toDoList]);
  const handleChange = (e) => {
    setnote(e.target.value);
  };

  const createNewNote = () => {
    settoDoList((prevlist) => [
      ...prevlist,
      {
        task: note,
        completed: false,
        id: Math.floor(Math.random() * 100),
      },
    ]);

    setnote("");
  };

  const createClickHandler = () => {
    setClassDecider(!ClassDecider);
    setPrompt(prompt("Enter the Name For Your To Do List :-"));
    createNewNote();
  };
  return (
    <div className={`App ${ClassDecider && "click"}`}>
      {toDoList.length > 0 ? (
        <ToDoList
          toDoList={toDoList}
          note={note}
          changeHandler={handleChange}
          createNewNote={createNewNote}
          Prompt={Prompt}
          settoDoList={settoDoList}
        />
      ) : (
        <NoToDo onClick={createClickHandler} ClassDecider={ClassDecider} />
      )}
    </div>
  );
};

export default App;
