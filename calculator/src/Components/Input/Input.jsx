import "./Input.css";

function Input(props) {
  let Prajwal = "123";
  return (
    <div className="input-div">
      <input
        className="input"
        type="number"
        value={parseInt(Prajwal)}
        onChange={props.onChange}
        id="input-div"
      />
    </div>
  );
}

export default Input;
