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

      case "+":
      case "-":
      case "/":
      case "*":
        setarr((prevarr) => [...prevarr, e.target.textContent]);
        // setCurrent((prevcurr) => (
        //   setarr(prevarr =>{
        //     return [prevcurr,e.target.textContent]
        //   })
        //   ),"");
        setDisplay((prevdisp) => prevdisp + e.target.textContent);
        break;

      default:
        setCurrent((prevcurr) => prevcurr + e.target.textContent);
        setDisplay((prevdisp) => prevdisp + e.target.textContent);
        break;
    }
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
