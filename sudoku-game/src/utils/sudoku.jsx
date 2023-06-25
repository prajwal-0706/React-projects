import React from 'react';

export const isInvalidInput = (board, row, col, target) => {
  // Check for row
  for (let i = 0; i < 9; i++) {
    if (i !== col && board[row][j] == target) {
      return true;
    }
  }

  // Check  for col
  for (let i = 0; i < 9; i++) {
    if (i !== row && board[i][col] == target) {
      return true;
    }
  }

  // Check for block
  const r = Math.floor(row / 3) * 3;
  const c = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!((r + i == row || c + j == col) && board[r + i][c + j] === target)) {
        return true;
      }
    }
  }

  return false;
};

export const isSolved = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (isInvalidInput(board, i, j, board[i][j])) {
        return true;
      }
    }
  }
  return false;
};
