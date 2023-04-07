import React from 'react';
import './FixDiv.css';

const FixDiv = ({ toggleTheme }) => {
  return <div className={`fixedDiv ${toggleTheme && 'darkMode'}`}></div>;
};

export default FixDiv;
