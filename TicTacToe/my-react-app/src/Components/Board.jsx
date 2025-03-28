import React from "react";
import Square from "./Square";
function Board({ xIsNext, squares, onPlay }) {
  const { winner, winningSquares } = calculateWinner(squares);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares, i);
  }

  const renderSquare = (i) => (
    <Square
      key={i}
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinningSquare={winningSquares.includes(i)}
    />
  );

  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: line };
    }
  }
  return { winner: null, winningSquares: [] };
}
export default Board;
