import "./Container.css";
import Input from "../Input/Input";
import Heading from "../Heading/Heading";
import Body from "../Body/Body";

function Container() {
  return (
    <div className="cal-wrapper">
      <Heading />
      <Input />
      <Body />
    </div>
  );
}

export default Container;
