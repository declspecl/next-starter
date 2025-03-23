import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Tara & Ash</h1>
        <p>Four-wheeling, Food, and Hackathon Judging</p>
      </header>

      <section className={styles.activities}>
        <h2>Our Passions</h2>
        <ul>
          <li>Four-Wheeling Adventures</li>
          <li>Delicious Food Experiences</li>
          <li>Judging Exciting Hackathon Projects</li>
        </ul>
      </section>

      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          We are Tara and Ash, two adventurous souls who love exploring the
          outdoors, indulging in culinary delights, and contributing to the
          innovative world of hackathons.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Tara & Ash. All rights reserved.</p>
      </footer>
    </div>
  );
}
