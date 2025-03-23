import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to John's Hackathon Hub!</h1>
        <p>A place where John shares his passion for hackathons, both as a participant and a judge.</p>

        <section>
          <h2>About John</h2>
          <p>John is an avid hackathon enthusiast with years of experience. He loves building innovative projects and contributing to the developer community.</p>
        </section>

        <section>
          <h2>Hackathons John Loves</h2>
          <ul>
            <li>ETHGlobal</li>
            <li>HackMIT</li>
            <li>Local University Hackathons</li>
          </ul>
        </section>

        <section>
          <h2>Judging Criteria</h2>
          <p>As a judge, John values the following:</p>
          <ol>
            <li><strong>Innovation:</strong> How original and creative is the idea?</li>
            <li><strong>Impact:</strong> What problem does it solve and how effectively?</li>
            <li><strong>Technical Execution:</strong> How well is the project implemented from a technical standpoint?</li>
            <li><strong>Presentation:</strong> How clearly and effectively is the project presented?</li>
          </ol>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Feel free to reach out to John via email: john@example.com</p>
        </section>
      </main>
    </div>
  );
}
