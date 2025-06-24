import { useState } from "react";
import Grid from "./Grid";

export default function GameGrid() {
  const [rows, setRows] = useState([
    Array(3).fill("active"),
    Array(5).fill("active"),
    Array(7).fill("active"),
  ]);

  const [activeRow, setActiveRow] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [winner, setWinner] = useState(null);

  function handleCircleClick(rowIndex, circleIndex) {
    if (winner) return;

    const current = rows[rowIndex][circleIndex];
    if (current === "locked") return;

    const effectiveRow = activeRow === null ? rowIndex : activeRow;
    if (rowIndex !== effectiveRow) return;

    const newRows = rows.map((row, i) =>
      i !== rowIndex
        ? row
        : row.map((status, j) =>
            j === circleIndex
              ? status === "selected" ? "active" : "selected"
              : status
          )
    );

    const selectedCount = newRows[rowIndex].filter(s => s === "selected").length;

    setActiveRow(selectedCount === 0 ? null : rowIndex);
    setRows(newRows);
  }

  function playMove() {
    if (activeRow === null || winner) return;

    const updatedRows = rows.map((row, i) =>
      i !== activeRow
        ? row
        : row.map(status => (status === "selected" ? "locked" : status))
    );

    const remaining = updatedRows.flat().filter(s => s === "active").length;

    if (remaining === 1) {
      setWinner(currentPlayer);
    }

    setRows(updatedRows);
    setActiveRow(null);

    setCurrentPlayer(prev =>
      prev === "Player 1" ? "Player 2" : "Player 1"
    );
  }

  function resetGame() {
    setRows([
      Array(3).fill("active"),
      Array(5).fill("active"),
      Array(7).fill("active"),
    ]);
    setActiveRow(null);
    setWinner(null);
    setCurrentPlayer("Player 1");
  }

  return (
    <>
      <h2 style={{ color: winner ? "green" : currentPlayer === "Player 1" ? "blue" : "red" }}>
        {winner ? `${winner} Wins!` : `${currentPlayer}'s Turn`}
      </h2>

      <div className="game-grid">
        {rows.map((row, rowIndex) => (
          <Grid
            key={rowIndex}
            state={row}
            onCircleClick={(circleIndex) => handleCircleClick(rowIndex, circleIndex)}
          />
        ))}
      </div>

      <div className="footer-div">
        <button className="play-button" onClick={playMove} disabled={winner}>
          Play Move
        </button>
        <button className="resign-button" onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
}
