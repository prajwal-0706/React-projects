import React, { createContext, useState } from 'react';

export const BoardNumbersContext = createContext();

export const BoardNumbersProvider = (props) => {
  const [boardNumbers, setboardNumbers] = useState([
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
    ],
    [
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 0,
        active: false,
      },
      {
        data: 1,
        active: true,
      },
    ],
  ]);

  return (
    <BoardNumbersContext.Provider value={[boardNumbers, setboardNumbers]}>
      {props.children}
    </BoardNumbersContext.Provider>
  );
};
