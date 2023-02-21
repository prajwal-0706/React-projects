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
        setarr([]);
        setCurrent("");
        setDisplay("");
        break;

      case "=":
        setarr((prevarr) => [...prevarr, Current]);
        let length = arr.length - 1;
        let op1 = parseFloat(arr[0]);

        result(op1);

      case "+":
      case "-":
      case "/":
      case "*":
        setarr((prevarr) => [Current, e.target.textContent, ...prevarr]);
        setCurrent("");
        setDisplay((prevdisp) => prevdisp + e.target.textContent);
        break;

      default:
        setCurrent((prevcurr) => prevcurr + e.target.textContent);
        setDisplay((prevdisp) => prevdisp + e.target.textContent);
        break;
    }
  };

  const result = (op1) => {
    for (let k = 1; k < length; k++) {
      if (k % 2 != 0) {
        switch (arr[k]) {
          case "+":
            op1 = op1 + parseFloat(arr[k + 1]);
            console.log(op1);
            console.log(arr[k]);
            console.log(arr[k + 1]);
            break;

          case "-":
            op1 = op1 - parseFloat(arr[k + 1]);
            break;

          case "*":
            op1 = op1 * parseFloat(arr[k + 1]);
            break;

          case "/":
            op1 = op1 / parseFloat(arr[k + 1]);
            break;

          case "%":
            op1 = (op1 / parseFloat(arr[k + 1])) * 100;
            break;
        }
      }
    }
    console.log(op1);
    return setDisplay(op1);
  };
  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <div className="cal-wrapper">
      <Heading />
      <Input disp={Display} onChange={handleChange} />
      <Body onClick={handleClick} />
    </div>
  );
}

export default Container;
