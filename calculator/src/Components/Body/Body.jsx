import "./Body.css";

function Body() {
  return (
    <div className="b-container">
      <div className="b-left">
        <div className="row row-1">
          <div
            className="btn btn-1"
            onClick={() => {
              console.log("Hello");
            }}
          >
            AC
          </div>
          <div className="btn">-</div>
          <div className="btn">/</div>
        </div>
        <div className="row row-2">
          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
        </div>
        <div className="row row-3">
          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">3</div>
        </div>
        <div className="row row-4">
          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>
        </div>
        <div className="row row-5">
          <div className="btn spl-btn">0</div>
          <div className="btn">.</div>
        </div>
      </div>

      <div className="b-right">
        <div className="btn">*</div>
        <div className="btn">-</div>
        <div className="btn spl-btn-1">+</div>
        <div className="btn spl-btn-1">=</div>
      </div>
    </div>
  );
}

export default Body;
