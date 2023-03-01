import React from "react";
import ToDo from "../ToDo/ToDo";
import "./toDoList.css";

const ToDoList = ({
  toDoList,
  changeHandler,
  note,
  createNewNote,
  Prompt,
  settoDoList,
}) => {
  return (
    <div className="to-do">
      <div className="to-do-heading">{`${Prompt}'s To Do List`}</div>
      <div className="disp">
        <div className="input">
          <input value={note} type="text" onChange={(e) => changeHandler(e)} />
          <i onClick={createNewNote} className="fa-solid fa-square-plus"></i>
        </div>
        <div className="to-do-list">
          {toDoList.map((toDo, index) => (
            <ToDo
              task={toDo.task}
              toDo={toDo}
              status={toDo.completed}
              key={index}
              toDoList={toDoList}
              settoDoList={settoDoList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
