import React, { useContext } from 'react';
import './Input.css';
import { BoardNumbersContext } from '../../context/boardNumberContext';

const Input = ({ row, col, isActive }) => {
  const [boardNumbers, setboardNumbers] = useContext(BoardNumbersContext);

  const clickHandler = (row, col) => {
    setboardNumbers(
      boardNumbers.map((board_input, index) =>
        board_input.map((board, id) => {
          if (index === row && id === col) {
            return {
              ...board,
              active: !board.active,
            };
          }
          return {
            ...board,
            active: false,
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
      className={`boardInput ${isActive && 'active'} ${
        col + 1 !== 9 ? ((col + 1) % 3 === 0 ? 'style-for-col' : '') : ''
      }`}
    />
  );
};

export default Input;
