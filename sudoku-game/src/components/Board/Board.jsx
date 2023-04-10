import React, { useContext } from 'react';
import './Board.css';
import Input from '../Inputs/Input';
import NumberInput from '../NumberInput/NumberInput';
import { BoardNumbersContext } from '../../context/boardNumberContext';

const Board = () => {
  const [boardNumbers, setboardNumbers] = useContext(BoardNumbersContext);

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
                      isrowCol={board.rowCol}
                      isActive={board.active}
                      row={index}
                      col={id}
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
