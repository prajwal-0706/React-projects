import "./Container.css";
import Input from "../Input/Input";
import Heading from "../Heading/Heading";
import Body from "../Body/Body";

function Container() {
  const handleClick = () => {
    console.log("Hello World");
  };

  return (
    <div className="cal-wrapper">
      <Heading />
      <Input />
      <Body onClick={handleClick} />
    </div>
  );
}

export default Container;
