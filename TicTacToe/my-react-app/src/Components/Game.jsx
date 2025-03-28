import Board from "./Board";
import React from "react";
import { useState } from "react";

function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;
  const { winner } = calculateWinner(currentSquares);

  function handlePlay(nextSquares, index) {
    const row = Math.floor(index / 3) + 1;
    const col = (index % 3) + 1;
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location: { row, col } },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((step, move) => {
    const description = move
      ? `Go to move #${move} (${step.location.row}, ${step.location.col})`
      : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          style={{ fontWeight: move === currentMove ? "bold" : "normal" }}
        >
          {description}
        </button>
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : moves.slice().reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </div>
        <button onClick={() => setIsAscending(!isAscending)}>
          Sort Moves: {isAscending ? "Ascending" : "Descending"}
        </button>
        <ol>{sortedMoves}</ol>
      </div>
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
export default Game;
