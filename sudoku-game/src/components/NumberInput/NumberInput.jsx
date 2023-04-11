import React from 'react';
import './NumberInput.css';

const NumberInput = () => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const ClickHandler = (e) => {
    console.log(e.target.textContent);
  };
  return (
    <div className="board Container">
      <div className="Numbers">
        {numberArray.map((number, index) => (
          <div
            key={index}
            onClick={(e) => ClickHandler(e)}
            className="boardInput numbers"
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberInput;
