import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";
import xImage from "../assets/x-image.png";
import oImage from "../assets/o-image.png";

const Board: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number): void => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? xImage : oImage;
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winningPlayer = calculateWinner(newSquares);
    if (winningPlayer) {
      setWinner(winningPlayer);
    } else if (!newSquares.includes(null)) {
      setWinner("Draw");
    }
  };

  const calculateWinner = (squares: (string | null)[]): string | null => {
    const lines: number[][] = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = (): void => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div>
      <div className="status">
        {winner ? (
          <>
            {winner === "Draw" ? (
              <h2>It's a Draw!</h2>
            ) : (
              <h2>{winner === xImage ? "Player X Wins!" : "Player O Wins!"}</h2>
            )}
            <button onClick={()=>{resetGame()}}>Play Again</button>
          </>
        ) : (
          <h2>Player: {isXNext ? "X" : "O"}</h2>
        )}
      </div>
      <div className="board">
        {squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
