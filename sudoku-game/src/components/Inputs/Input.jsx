import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './Input.css';
import { BoardNumbersContext } from '../../context/boardNumberContext';

const Input = ({ row, col, isActive, isrowCol, item }) => {
  const [boardNumbers, setboardNumbers] = useContext(BoardNumbersContext);

  const clickHandler = (row, col) => {
    setboardNumbers(
      boardNumbers.map((board_input, index) =>
        board_input.map((board, id) => {
          // For Selected One
          if (index === row && id === col) {
            return {
              ...board,
              active: true,
              rowCol: false,
            };
          }

          if ((row + 1) % 2 === 0 && (col + 1) % 2 === 0) {
            if (
              (index === row - 1 || index === row + 1) &&
              (id === col - 1 || id === col + 1)
            ) {
              return {
                ...board,
                active: false,
                rowCol: true,
              };
            }
          }

          if (
            (index === row && id !== col) ||
            (id === col && index !== row) ||
            (row + 1 === index || row + 2 === index) && // Row Col and Adjacent blocks of Selected Div
            (col + 1 === id || col + 2 === id)
          ) {
            return {
              ...board,
              active: false,
              rowCol: true,
            };
          }

          return {
            ...board,
            active: false,
            rowCol: false,
          };
        })
      )
    );
  };

  return (
    <motion.div
      variants={item}
      onClick={(e) => {
        clickHandler(row, col);
        console.log(e);
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
