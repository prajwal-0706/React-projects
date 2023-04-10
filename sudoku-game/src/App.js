import Board from './components/Board/Board';
import FixDiv from './components/Fix Div/FixDiv';
// import Timer from './components/Timer/Timer';
import ToggleSwitcher from './components/Toggle Switcher/ToggleSwitcher';
import { BoardNumbersProvider } from './context/boardNumberContext';
import { ThemeSwitchProvider } from './context/themeSwitcherContext';

function App() {
  return (
    <BoardNumbersProvider>
      <ThemeSwitchProvider>
        <div className="App">
          <ToggleSwitcher />
          <FixDiv />
          {/* <Timer /> */}
          <Board />
        </div>
      </ThemeSwitchProvider>
    </BoardNumbersProvider>
  );
}

export default App;
