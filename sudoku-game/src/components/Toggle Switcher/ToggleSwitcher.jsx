import React, { useContext, useEffect } from 'react';
import './ToggleSwitcher.css';
import { ThemeSwitcherContext } from '../../context/themeSwitcherContext';
import { motion, spring } from 'framer-motion';

const ToggleSwitcher = () => {
  const [toggleTheme, setToggleTheme] = useContext(ThemeSwitcherContext);

  // useEffect(() => {
  //   localStorage.setItem('theme', JSON.stringify(toggleTheme)); //Setting data in local Storage
  // });

  const themeSwitcher = () => {
    setToggleTheme((prevTheme) => !prevTheme);
  };

  return (
    <motion.div
      initial={{
        x: '-70px',
        opacity: 0,
      }}
      animate={{
        x: '0px',
        opacity: 1,
      }}
      transition={{
        duration: 1,
        type: spring,
      }}
      className={`toggleContainer ${toggleTheme && 'active'}`}
    >
      <div className="toggle" onClick={themeSwitcher}>
        <span className="toggle-handler">
          <span className="crater crater-1"></span>
          <span className="crater crater-2"></span>
          <span className="crater crater-3"></span>
        </span>
        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
        <span className="star star-6"></span>
      </div>
    </motion.div>
  );
};

export default ToggleSwitcher;
