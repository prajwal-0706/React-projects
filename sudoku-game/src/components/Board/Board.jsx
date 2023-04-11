import React, { useContext } from 'react';
import './Board.css';
import Input from '../Inputs/Input';
import NumberInput from '../NumberInput/NumberInput';
import { BoardNumbersContext } from '../../context/boardNumberContext';
import { motion, spring, Tween } from 'framer-motion';

const Board = () => {
  const [boardNumbers, setboardNumbers] = useContext(BoardNumbersContext);

  const Container = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: spring,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <div className="mainBoard">
      <motion.div
        initial={{
          y: '100px',
          opacity: 0.3,
        }}
        animate={{
          y: '0px',
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
          type: spring,
        }}
        className="left"
      >
        <div className="heading">
          <h1>Sudoku</h1>
        </div>
        <NumberInput />
      </motion.div>
      <motion.div
        initial={{
          x: '200px',
          opacity: 0,
        }}
        animate={{
          x: '0px',
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
          type: spring,
        }}
        className="right"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={Container}
          className="board"
        >
          {boardNumbers.map((board_input, index) => {
            return (
              <motion.div
                variants={item}
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
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Board;
