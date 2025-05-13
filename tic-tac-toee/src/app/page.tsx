import styles from "./page.module.css";
import Board from "../components/Board";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Tic Tac Toe</h1>

        <Board />
      </main>
    </div>
  );
}
