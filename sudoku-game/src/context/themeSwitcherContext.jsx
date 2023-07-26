  import React, { createContext, useState } from 'react';

export const ThemeSwitcherContext = createContext();

export const ThemeSwitchProvider = (props) => {
  const toggleFromLocalStorage = localStorage.getItem('theme');

  const [toggleTheme, setToggleTheme] = useState(false);


  return (
    <ThemeSwitcherContext.Provider value={[toggleTheme, setToggleTheme]}>
      {props.children}
    </ThemeSwitcherContext.Provider>
  );
};
