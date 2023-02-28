import React from "react";
import "./ToDo.css";

const ToDo = () => {
  return (
    <div className="todo">
      <li>Hello World</li>
      <button className="checked">
        <i class="fa-solid fa-square-check"></i>
      </button>
      <button className="delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default ToDo;
