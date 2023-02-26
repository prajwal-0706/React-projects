import React, { useState } from "react";

import "./App.css";
import NoToDo from "./components/no-to-do/NoToDo";

const App = () => {
  const [ClassDecider, setClassDecider] = useState(false);
  const [toDoList, settoDoList] = useState([]);

  const createClickHandler = () => {
    setClassDecider((prev) => !ClassDecider);
  };
  return (
    <div className="App">
      {toDoList.length > 0 ? (
        <h1>hello World</h1>
      ) : (
        <NoToDo onClick={createClickHandler} ClassDecider={ClassDecider} />
      )}
    </div>
  );
};

export default App;
