import React, { createContext, useState } from 'react';

export const ThemeSwitcherContext = createContext();

export const ThemeSwitchProvider = (props) => {
  const toggleFromLocalStorage = localStorage.getItem('theme');

  const [toggleTheme, setToggleTheme] = useState(false);

  // useState(
  //   () => JSON.parse(toggleFromLocalStorage) || false //Fetching data from local Storage
  // );
  return (
    <ThemeSwitcherContext.Provider value={[toggleTheme, setToggleTheme]}>
      {props.children}
    </ThemeSwitcherContext.Provider>
  );
};
