import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import FixDiv from './components/Fix Div/FixDiv';
import ToggleSwitcher from './components/Toggle Switcher/ToggleSwitcher';

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);

  const themeSwitcher = () => {
    setToggleTheme((prevtheme) => !prevtheme);
  };

  return (
    <div className="App">
      <ToggleSwitcher themeSwitcher={themeSwitcher} />
      <FixDiv toggleTheme={toggleTheme} />
      <Board toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
