import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Pankaj's Website!</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About Pankaj</h2>
          <p>Pankaj is passionate about ping pong and enjoys judging hackathons.</p>
        </section>
        <section className={styles.section}>
          <h2>Ping Pong</h2>
          <p>He loves playing ping pong and always looks for a good match.</p>
        </section>
        <section className={styles.section}>
          <h2>Hackathon Judge</h2>
          <p>Pankaj is an experienced hackathon judge and enjoys seeing innovative projects.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Pankaj's Website</p>
      </footer>
    </div>
  );
}
