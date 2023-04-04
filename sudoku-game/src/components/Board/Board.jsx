import React, { useState } from 'react';
import './Board.css';
import Input from '../Inputs/Input';

const Board = () => {
  const [boardNumbers, setboardNumbers] = useState([
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 1,
        active: true,
      },
    ],
  ]);

  const clickHandler = (row, col) => {
    // setboardNumbers((prev) => {
    //   return [...prev];
    //   // boardNumbers[row][col].active;
    // });
    console.log(boardNumbers[row][col].data);
    console.log(boardNumbers[row][col].active);
  };

  return (
    <div className="mainBoard">
      <div className="heading">
        <h1>Sudoku</h1>
        <div
          style={{
            height: '90%',
            width: '50%',
          }}
          className="Numbers"
        ></div>
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
                    clickHandler={clickHandler}
                    row={index}
                    col={id}
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
