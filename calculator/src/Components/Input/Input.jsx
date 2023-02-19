import "./Input.css";

function Input(props) {
  return (
    <div className="input-div">
      <input
        className="input"
        type="text"
        value={parseInt(props.disp)}
        // onChange={props.onChange}
        id="input-div"
      />
    </div>
  );
}

export default Input;
