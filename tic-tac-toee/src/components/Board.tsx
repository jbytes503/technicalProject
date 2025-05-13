"use client";
import { useEffect, useState } from "react";
import Square from "./Square";
import styles from "./Board.module.css";

import { Player } from "../types";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player | "Draw">(null);
  function setSquareValue(index: number) {
    const newData = squares.map((value, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return value;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }
  function resetBoard() {
    setSquares(Array(9).fill(null));
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    setWinner(null);
  }

  function calculateWinner(squares: Player[]) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }
    if (!w && !squares.filter((square) => !square).length) {
      setWinner("Draw");
    }
  });
  return (
    <div className={styles.board}>
      <div className={styles.player}>
        {!winner && (
          <p>
            <strong>{currentPlayer} </strong> it is your turn
          </p>
        )}
        {winner && winner !== "Draw" && (
          <p>
            <strong>{winner}</strong> won the game
          </p>
        )}
        {winner === "Draw" && (
          <p>
            <strong>Draw</strong>
          </p>
        )}
      </div>
      <div className={styles.grid}>
        {Array(9)
          .fill(null)
          .map((_, index) => {
            return (
              <Square
                winner={winner}
                key={index}
                onClick={() => setSquareValue(index)}
                value={squares[index]}
              />
            );
          })}
      </div>
      <button className={styles.restart} onClick={resetBoard}>
        Restart
      </button>
    </div>
  );
}

export default Board;
