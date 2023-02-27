import React from "react";
import "./NoToDo.css";
import wallpaper from "../../Images/wallpaper.png";
import ToDoList from "../toDoList/ToDoList";

const NoToDo = ({ onClick, ClassDecider }) => {
  return (
    <div className={`head-1 ${ClassDecider && "fade"}`}>
      <svg
        id="eHGcy46pMvO1"
        className="svg_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <polygon
          points="0,-222.00217 211.13661,-68.602443 130.489602,179.603528 -130.489602,179.603528 -211.13661,-68.602443 0,-222.00217"
          transform="matrix(-.59518-1.395237 1.392004-.593802-102.420419 251.196233)"
          fill="#004aad"
          strokeWidth="0"
        />
      </svg>
      <svg
        id="eEnxzOBr7p61"
        className="svg_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <polygon
          points="0,-222.00217 211.13661,-68.602443 130.489602,179.603528 -130.489602,179.603528 -211.13661,-68.602443 0,-222.00217"
          transform="matrix(-.243321-1.497237 1.493769-.242758 398.201802-110.642364)"
          fill="#004aad"
          strokeWidth="0"
        />
      </svg>

      <img src={wallpaper} alt="prajwal" />

      <div className="text">
        <div className="main">
          <div className="text-1">Make a New To</div>
          <div className="text-2">Do List</div>
        </div>
        <button
          onClick={() => {
            onClick();
            <ToDoList />;
          }}
          className="btn"
        >
          Create Now
        </button>
      </div>
      <div className="liners">
        <span>Achievers Always work from a clear sense of priority</span>
        <span>- Gary Keller</span>
      </div>
    </div>
  );
};

export default NoToDo;
