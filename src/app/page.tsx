import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Judge's Sleep Sanctuary</h1>
        <p>A tribute to the art of napping.</p>
      </header>

      <main className={styles.main}>
        <section className={styles.about}>
          <h2>About Judge</h2>
          <p>Judge is a connoisseur of sleep, a master of slumber, and a professional napper. He believes in the power of a good rest and dedicates his life to exploring the depths of relaxation.</p>
        </section>

        <section className={styles.whySleep}>
          <h2>Why Sleep is Important</h2>
          <ul>
            <li>Restores energy</li>
            <li>Improves mood</li>
            <li>Boosts creativity</li>
            <li>Enhances memory</li>
            <li>And most importantly, it feels amazing!</li>
          </ul>
        </section>

        <section className={styles.judgeTips}>
          <h2>Judge's Top Sleeping Tips</h2>
          <ol>
            <li>Create a relaxing bedtime routine.</li>
            <li>Make sure your bedroom is dark, quiet, and cool.</li>
            <li>Invest in a comfortable mattress and pillows.</li>
            <li>Avoid caffeine and alcohol before bed.</li>
            <li>Take naps whenever possible!</li>
          </ol>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Judge's Sleep Sanctuary. All rights reserved.</p>
      </footer>
    </div>
  );
}
