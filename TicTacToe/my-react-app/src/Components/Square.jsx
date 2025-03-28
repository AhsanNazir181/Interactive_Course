import React from "react";

function Square({ value, onSquareClick, isWinningSquare }) {
  return (
    <div>
      <button
        className={`square ${isWinningSquare ? "winning" : ""}`}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Square;
