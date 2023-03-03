import React from "react";
import "./ToDo.css";

const ToDo = ({ task, status, settoDoList, toDo, toDoList }) => {
  const completedNote = () => {
    settoDoList(
      toDoList.map((element) => {
        if (element.id === toDo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  const deleteNote = () => {
    settoDoList(toDoList.filter((element) => element.id !== toDo.id));
  };

  return (
    <div className={`todo ${status && "complete"}`}>
      <li>{task}</li>
      <button onClick={completedNote} className="checked">
        <i className="fa-solid fa-square-check"></i>
      </button>
      <button onClick={deleteNote} className="delete">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default ToDo;
