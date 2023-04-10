import React, { useContext } from 'react';
import './Input.css';
import { BoardNumbersContext } from '../../context/boardNumberContext';

const Input = ({ row, col, isActive, isrowCol }) => {
  const [boardNumbers, setboardNumbers] = useContext(BoardNumbersContext);

  const clickHandler = (row, col) => {
    setboardNumbers(
      boardNumbers.map((board_input, index) =>
        board_input.map((board, id) => {
          if (index === row && id === col) {
            return {
              ...board,
              active: true,
              rowCol: false,
            };
          }
          if (index === row && id !== col) {
            return {
              ...board,
              active: false,
              rowCol: true,
            };
          }
          if (id === col && index !== row) {
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
    <div
      onClick={(e) => {
        clickHandler(row, col);
        console.log(e);
      }}
      val={boardNumbers[row][col].data}
      type="text"
      className={`boardInput ${isActive && 'active'} ${isrowCol && 'rowCol'} ${
        col + 1 !== 9 ? ((col + 1) % 3 === 0 ? 'style-for-col' : '') : ''
      }`}
    />
  );
};

export default Input;
