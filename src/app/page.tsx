import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Shiva's Website</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#hiking">Hiking</a>
          <a href="#hackathons">Hackathons</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h2>About Shiva</h2>
          <p>
            Passionate about hiking and contributing to the tech community by judging hackathons.
          </p>
        </section>

        <section id="hiking" className={styles.section}>
          <h2>Hiking Adventures</h2>
          <p>
            [Insert hiking photos and stories here]
          </p>
        </section>

        <section id="hackathons" className={styles.section}>
          <h2>Hackathon Judging</h2>
          <p>
            [Insert details about hackathons Shiva has judged]
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Shiva's Website</p>
      </footer>
    </div>
  );
}
