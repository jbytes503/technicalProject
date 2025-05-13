import styles from "./Square.module.css";
import { Player } from "../types";

function Square({
  value,
  onClick,
  winner,
}: {
  winner: Player | "Draw";
  value: Player;
  onClick: () => void;
}) {
  if (!value) {
    return (
      <button
        onClick={onClick}
        className={styles.square}
        disabled={Boolean(winner)}
      />
    );
  }
  return (
    <button
      className={`${styles.square} ${
        value ? styles[`square_${value.toLowerCase()}`] : ""
      }`}
      disabled
    >
      {value}
    </button>
  );
}
export default Square;
