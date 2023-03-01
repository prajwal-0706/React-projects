import React from "react";
import "./ToDo.css";

const ToDo = () => {
  return (
    <div className="todo">
      <li>Hello World</li>
      <button className="checked">
        <i className="fa-solid fa-square-check"></i>
      </button>
      <button className="delete">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default ToDo;
