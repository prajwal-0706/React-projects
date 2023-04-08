import React, { useContext } from 'react';
import './FixDiv.css';
import { ThemeSwitcherContext } from '../../context/themeSwitcherContext';

const FixDiv = () => {
  const [toggleTheme] = useContext(ThemeSwitcherContext);

  return <div className={`fixedDiv ${toggleTheme && 'darkMode'}`}></div>;
};

export default FixDiv;
