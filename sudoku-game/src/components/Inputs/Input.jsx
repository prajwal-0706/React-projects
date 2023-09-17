import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './Input.css';
import { BoardNumbersContext } from '../../context/boardNumberContext';

const Input = ({ row, col, isActive, isrowCol, item }) => {
  const [boardNumbers] = useContext(BoardNumbersContext);

  const clickHandler = (row, col) => {
    console.log(row, col);
  };

  return (
    <motion.div
      variants={item}
      onClick={(e) => {
        clickHandler(row, col);
      }}
      val={boardNumbers[row][col].data}
      type="text"
      className={`boardInput ${isActive ? 'active' : ''} 
      ${isrowCol ? 'rowCol' : ''} ${
        col + 1 !== 9 ? ((col + 1) % 3 === 0 ? 'style-for-col' : '') : ''
      }`}
    />
  );
};

export default Input;
