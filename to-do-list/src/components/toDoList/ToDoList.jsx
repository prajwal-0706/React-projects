import React from "react";
import ToDo from "../ToDo/ToDo";
import "./toDoList.css";

const ToDoList = ({ toDoList }) => {
  return (
    <div className="to-do">
      <div className="to-do-heading">Prajwal's To Do List</div>
      <div className="input">
        <input type="text" />
        <i class="fa-solid fa-square-plus"></i>
      </div>
      <div className="to-do-list">
        {toDoList.map((toDo) => (
          // <h1>{toDo}</h1>
          <ToDo />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
