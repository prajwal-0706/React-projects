import "./Container.css";
import React from "react";
import { useState, useEffect } from "react";
import Input from "../Input/Input";
import Heading from "../Heading/Heading";
import Body from "../Body/Body";

function Container() {
  const [arr, setarr] = useState([]);
  const [Display, setDisplay] = useState("");
  const [Current, setCurrent] = useState("");

  const handleChange = (e) => {
    console.log("Change Handled");
  };
  const handleClick = (e) => {
    switch (e.target.textContent) {
      case "AC":
        setarr((prevarr) => {
          return [...prevarr, e.target.textContent];
        });

        break;

      // default:
      //   setarr(e.target.textContent);
      //   console.log(arr);
      //   break;
    }
  };

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <div className="cal-wrapper">
      <Heading />
      <Input onChange={handleChange} />
      <Body onClick={handleClick} />
    </div>
  );
}

export default Container;
