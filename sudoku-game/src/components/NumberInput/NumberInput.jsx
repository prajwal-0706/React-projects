import React from 'react';
import './NumberInput.css';
import { motion, spring } from 'framer-motion';

const NumberInput = () => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const Container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        type: spring,
      },
    },
  };

  const item = {
    hidden: {
      y: '200px',
    },
    show: {
      y: '0px',
    },
  };

  const ClickHandler = (e) => {
    console.log(e.target.textContent);
  };
  return (
    <div className="board Container">
      <motion.div
        initial="hidden"
        animate="show"
        variants={Container}
        className="Numbers"
      >
        {numberArray.map((number, index) => (
          <motion.div
            whileTap={{
              scale: 0.8,
              transition: {
                duration: 0.1,
              },
            }}
            variants={item}
            key={index}
            onClick={(e) => ClickHandler(e)}
            className="boardInput numbers"
          >
            {number}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NumberInput;
