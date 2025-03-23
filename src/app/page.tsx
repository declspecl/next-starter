import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Hackathon Presentations!</h1>
        <p>A place for Lex, Brodie, and Laura to enjoy great hackathon project presentations.</p>
      </header>

      <section className={styles.featuredPresentations}>
        <h2>Featured Presentations</h2>
        {/* Placeholder for featured presentations */}
        <p>Coming soon: A curated list of amazing hackathon presentations.</p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Hackathon Presentations</p>
      </footer>
    </div>
  );
}
