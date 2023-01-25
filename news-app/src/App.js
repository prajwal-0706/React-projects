import './App.css';
import React from 'react';
import Heading from './components/Heading/Heading';
import NavBar from './components/NavBar/NavBar';
import NewsContainer from './components/NewsContainer/NewsContainer'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading />
      <NewsContainer />
    </div>
  );
}

export default App;
