import React from 'react';
import './ToggleSwitcher.css';

const ToggleSwitcher = ({ themeSwitcher }) => {
  return (
    <div className="toggleContainer">
      <input type="checkbox" id="dark" />
      <label htmlFor="dark" className="toggle" onClick={themeSwitcher}>
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
      </label>
    </div>
  );
};

export default ToggleSwitcher;
