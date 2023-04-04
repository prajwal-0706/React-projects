import React, { useState } from 'react';
import './Input.css';

const Input = ({ val, index, row, col, clickHandler }) => {
  return (
    <div
      onClick={() => {
        clickHandler(row, col);
      }}
      type="text"
      value={val}
      className={`boardInput 
       ${index !== 9 ? (index % 3 === 0 ? 'style-for-col' : '') : ''}`}
    />
  );
};

export default Input;
