import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Hemanth</h1>
        <p>Orchestra enthusiast | Hackathon Judge</p>
      </header>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          Hello! I'm Hemanth, a passionate individual with a love for orchestral music and a keen eye for innovative hackathon projects. I enjoy playing various instruments and appreciating the beauty of classical compositions. Also I am a judge in hackathons.
        </p>
      </section>

      <section className={styles.interests}>
        <h2>Interests</h2>
        <ul>
          <li>Orchestral Music</li>
          <li>Hackathons</li>
          <li>Judging Projects</li>
          {/* Add more interests here */}
        </ul>
      </section>

      <footer>
        <p>&copy; 2024 Hemanth. All rights reserved.</p>
      </footer>
    </div>
  );
}
