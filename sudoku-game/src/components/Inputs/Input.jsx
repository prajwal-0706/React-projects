import React from 'react';
import './Input.css';

const Input = ({ val, index }) => {
  const clickHandler = () => {
    alert('Hiii');
  };

  return (
    <input
      onClick={clickHandler}
      type="text"
      value={val}
      className={`boardInput ${
        index !== 9 ? (index % 3 === 0 ? 'style-for-col' : '') : ''
      }`}
    />
  );
};

export default Input;
