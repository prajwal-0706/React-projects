import React, { useContext } from 'react';
import './FixDiv.css';
import { ThemeSwitcherContext } from '../../context/themeSwitcherContext';
import { easeIn, motion, spring } from 'framer-motion';

const FixDiv = () => {
  const [toggleTheme] = useContext(ThemeSwitcherContext);

  return (
    <motion.div
      initial={{
        height: '10vh',
      }}
      animate={{
        height: '50vh',
      }}
      transition={{
        duration: 0.4,
      }}
      className={`fixedDiv ${toggleTheme && 'darkMode'}`}
    ></motion.div>
  );
};

export default FixDiv;
