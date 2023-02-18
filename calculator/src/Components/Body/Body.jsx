import "./Body.css";

function Body(props) {
  return (
    <div className="b-container">
      <div className="b-left">
        <div className="row row-1">
          <div className="btn btn-1" value="AC" onClick={props.onClick}>
            AC
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            -
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            /
          </div>
        </div>
        <div className="row row-2">
          <div className="btn" value="" onClick={props.onClick}>
            7
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            8
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            9
          </div>
        </div>
        <div className="row row-3">
          <div className="btn" value="" onClick={props.onClick}>
            4
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            5
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            3
          </div>
        </div>
        <div className="row row-4">
          <div className="btn" value="" onClick={props.onClick}>
            1
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            2
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            3
          </div>
        </div>
        <div className="row row-5">
          <div className="btn spl-btn" value="" onClick={props.onClick}>
            0
          </div>
          <div className="btn" value="" onClick={props.onClick}>
            .
          </div>
        </div>
      </div>

      <div className="b-right">
        <div className="btn" value="" onClick={props.onClick}>
          *
        </div>
        <div className="btn" value="" onClick={props.onClick}>
          -
        </div>
        <div className="btn spl-btn-1" value="" onClick={props.onClick}>
          +
        </div>
        <div className="btn spl-btn-1" value="" onClick={props.onClick}>
          =
        </div>
      </div>
    </div>
  );
}

export default Body;
