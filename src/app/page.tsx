import styles from "./page.module.css";
import ChessTimeline from './components/ChessTimeline';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>John's Chess Journey</h1>
        <p>Follow John's journey through the world of chess, from his humble beginnings to his current endeavors.</p>

        <section>
          <ChessTimeline />
        </section>
      </main>
    </div>
  );
}
