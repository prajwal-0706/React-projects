import React from 'react';
import './Input.css';

const Input = ({ val }) => {
  return <input type="text" value={val} className="boardInput" />;
};

export default Input;
