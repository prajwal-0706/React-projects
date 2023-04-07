import React, { useState } from 'react';
import './Board.css';
import Input from '../Inputs/Input';
import NumberInput from '../NumberInput/NumberInput';

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
    console.log(boardNumbers[row][col].data);
    console.log(boardNumbers[row][col].active);
  };

  return (
    <div className="mainBoard">
      <div className="left">
        <div className="heading">
          <h1>Sudoku</h1>
        </div>
        <NumberInput />
      </div>
      <div className="right">
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
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
