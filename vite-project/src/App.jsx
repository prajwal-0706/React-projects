import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Element from './Component';
import Compo2 from './Compo2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/element" element={<Compo2 />} />
        <Route path="/" element={<Element />} />
      </Routes>
    </>
  );
}

export default App;
