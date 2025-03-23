import styles from "./page.module.css";
import Image from 'next/image'
import globe from '../../public/globe.svg'
import windowImg from '../../public/window.svg'
import file from '../../public/file.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Farhan&apos;s Travel & Hackathon Reviews</h1>
        <p>Welcome to my personal website where I share my experiences traveling to hackathons and reviewing awesome projects!</p>
      </header>

      <section className={styles.about}>
        <h2>About Farhan</h2>
        <Image src={globe} alt="globe" width={50} height={50} />
        <p>I&apos;m Farhan, a passionate traveler and tech enthusiast. I love exploring new places and participating in hackathons around the world. This website is my way of sharing my adventures and insights with you.</p>
      </section>

      <section className={styles.hackathons}>
        <h2>Hackathon Travels</h2>
        <Image src={windowImg} alt="window" width={50} height={50} />
        <ul>
          <li>
            <h3>ETHGlobal Tokyo</h3>
            <p>Review and experience from ETHGlobal Tokyo</p>
          </li>
          <li>
            <h3>ETHGlobal New York</h3>
            <p>Review and experience from ETHGlobal New York</p>
          </li>
          {/* Add more hackathons here */}
        </ul>
      </section>

      <section className={styles.projects}>
        <h2>Project Reviews</h2>
        <Image src={file} alt="file" width={50} height={50} />
        <ul>
          <li>
            <h3>Project 1 Name</h3>
            <p>A brief review of Project 1.</p>
          </li>
          <li>
            <h3>Project 2 Name</h3>
            <p>A brief review of Project 2.</p>
          </li>
          {/* Add more project reviews here */}
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Farhan&apos;s Website</p>
      </footer>
    </div>
  );
}
