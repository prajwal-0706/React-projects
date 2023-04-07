import React, { useEffect, useState } from 'react';
import './App.css';
import NoToDo from './components/no-to-do/NoToDo';
import ToDoList from './components/toDoList/ToDoList';

const App = () => {
  const classFromStorage = localStorage.getItem('ClassDecider');
  const noteFromLocalStorage = localStorage.getItem('items');
  const promptFromLocalStorage = localStorage.getItem('Prompt');

  const [ClassDecider, setClassDecider] = useState(
    () => JSON.parse(classFromStorage) || false
  );

  const [note, setnote] = useState('Prajwal');

  const [toDoList, settoDoList] = useState(
    () => JSON.parse(noteFromLocalStorage) || []
  );

  const [Prompt, setPrompt] = useState(
    () => JSON.parse(promptFromLocalStorage) || ''
  );

  useEffect(() => {
    if (toDoList.length === 0) {
      setClassDecider(false);
    }
    localStorage.setItem('items', JSON.stringify(toDoList));
    localStorage.setItem('ClassDecider', JSON.stringify(ClassDecider));
    localStorage.setItem('Prompt', JSON.stringify(Prompt));
  }, [toDoList]);

  const handleChange = (e) => {
    setnote(e.target.value);
  };

  const createNewNote = () => {
    settoDoList((prevlist) => [
      ...prevlist,
      {
        task: note,
        completed: false,
        id: Math.floor(Math.random() * 100),
      },
    ]);

    setnote('');
  };

  const createClickHandler = () => {
    setClassDecider(!ClassDecider);
    setPrompt(prompt('Enter the Name For Your To Do List :-'));
    createNewNote();
  };
  return (
    <div className={`App ${ClassDecider && 'click'}`}>
      {toDoList.length > 0 ? (
        <ToDoList
          toDoList={toDoList}
          note={note}
          changeHandler={handleChange}
          createNewNote={createNewNote}
          Prompt={Prompt}
          settoDoList={settoDoList}
        />
      ) : (
        <NoToDo onClick={createClickHandler} ClassDecider={ClassDecider} />
      )}
    </div>
  );
};

export default App;
