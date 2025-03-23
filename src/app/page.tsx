import styles from "./page.module.css";
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Gia</h1>
        <p>Hackathon Judge</p>
      </header>

      <section className={styles.about}>
        <h2>About Me</h2>
        <Image
          src="/file.svg"
          alt="Gia's Image"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <p>
          I am a passionate and experienced hackathon judge with a background in
          computer science and a love for innovative projects. I have judged
          numerous hackathons and enjoy seeing the creativity and technical skills
          of participants.
        </p>
      </section>

      <section className={styles.experience}>
        <h2>Judging Experience</h2>
        <ul>
          <li>Hackathon X - 2023</li>
          <li>Hackathon Y - 2022</li>
          <li>Hackathon Z - 2021</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2>Contact</h2>
        <p>Email: gia@example.com</p>
        <p>Twitter: @Gia</p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Gia. All rights reserved.</p>
      </footer>
    </div>
  );
}
