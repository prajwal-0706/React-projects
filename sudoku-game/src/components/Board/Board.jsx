import React from 'react';
import './Board.css';
import Input from '../Inputs/Input';

const Board = () => {
  const boardNumbers = [
    [2, 0, 0, 0, 0, 0, 0, 6, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 7, 0, 0],
    [0, 4, 0, 0, 8, 0, 0, 0, 5],
    [0, 0, 6, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  return (
    <div className="mainBoard">
      <div className="heading">
        <h1>Sudoku</h1>
      </div>
      <div className="board">
        {boardNumbers.map((board_input, index) => {
          return (
            <div
              className={`row ${
                index + 1 !== 9
                  ? (index + 1) % 3 === 0
                    ? 'style-for-row'
                    : ''
                  : ''
              }`}
            >
              {board_input.map((board, id) => {
                return (
                  <Input
                    val={board}
                    index={id + 1}
                    key={Math.floor(Math.random() * 1000 + 3)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
