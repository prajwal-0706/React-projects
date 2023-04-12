import React, { useContext } from 'react';
import './Board.css';
import Input from '../Inputs/Input';
import NumberInput from '../NumberInput/NumberInput';
import { BoardNumbersContext } from '../../context/boardNumberContext';
import { motion, spring } from 'framer-motion';

const Board = () => {
  const [boardNumbers, setboardNumbers] = useContext(BoardNumbersContext);

  const Container = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        type: spring,
      },
    },
  };

  const item = {
    hidden: {
      x: '900px',
    },
    show: {
      x: '0px',
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
        <div className="button-section">
          <motion.button
            whileTap={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            initial={{
              x: '-400px',
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.8,
              type: spring,
            }}
            className="btn btn-1"
          >
            Pause
          </motion.button>
          <motion.button
            whileTap={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            initial={{
              x: '400px',
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.8,
              type: spring,
            }}
            className="btn btn-2"
          >
            New Game
          </motion.button>
        </div>
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
                      item={item}
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Board;
