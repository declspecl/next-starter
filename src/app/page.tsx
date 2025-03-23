import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Kate Bowers</h1>
        <p>Embedded Systems Engineer, Teacher, and Enthusiast</p>
      </header>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Kate! I'm passionate about embedded systems, teaching, Edge AI, video games,
          reviewing sci-fi books, and judging awesome hackathons. And, of course, I love my husband!
        </p>
      </section>

      <section className={styles.interests}>
        <h2>Interests</h2>
        <ul>
          <li>Embedded Systems</li>
          <li>Edge AI</li>
          <li>Teaching</li>
          <li>Video Games</li>
          <li>Sci-Fi Book Reviews</li>
          <li>Hackathons</li>
          <li>My Amazing Husband!</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Kate Bowers</p>
      </footer>
    </div>
  );
}
