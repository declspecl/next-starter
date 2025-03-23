import styles from "./page.module.css";
import Image from 'next/image'
import globe from '../../public/globe.svg'
import windowImg from '../../public/window.svg'
import file from '../../public/file.svg'
import duckWithTophat from '../../public/duck_tophat.png'
import { useState } from 'react';

// Strategy Pattern
interface ReviewStrategy {
  review(projectName: string): string;
}

class DetailedReview implements ReviewStrategy {
  review(projectName: string): string {
    return `Detailed review for ${projectName}: This project is amazing!`;
  }
}

class QuickReview implements ReviewStrategy {
  review(projectName: string): string {
    return `Quick review for ${projectName}: Good project!`;
  }
}

class ReviewContext {
  private strategy: ReviewStrategy;

  constructor(strategy: ReviewStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ReviewStrategy) {
    this.strategy = strategy;
  }

  createReview(projectName: string): string {
    return this.strategy.review(projectName);
  }
}

export default function Home() {
  const [reviewStrategy, setReviewStrategy] = useState<'quick' | 'detailed'>('quick');

  const context = new ReviewContext(reviewStrategy === 'quick' ? new QuickReview() : new DetailedReview());

  const handleStrategyChange = (strategy: 'quick' | 'detailed') => {
    setReviewStrategy(strategy);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Halee&apos;s World!</h1>
        <p>Ducks, Outfits, and Hackathons!</p>
        <Image src={duckWithTophat} alt="Duck with Tophat" width={100} height={100} />
      </header>

      <section className={styles.about}>
        <h2>About Halee</h2>
        <p>Halee loves ducks, especially when they are wearing outfits! Tophats are her favorite. She also enjoys exploring cool hackathon projects.</p>
      </section>

      <section className={styles.outfits}>
        <h2>Duck Outfits</h2>
        <p>Check out some of Halee&apos;s favorite duck outfits:</p>
        <ul>
          <li>Tophat and Monocle</li>
          <li>Sailor Outfit</li>
          <li>Detective Outfit</li>
        </ul>
      </section>

      <section className={styles.hackathons}>
        <h2>Cool Hackathon Projects</h2>
        <ul>
          <li>
            <h3>Project 1 Name</h3>
            <p>{context.createReview('Project 1')}</p>
          </li>
          <li>
            <h3>Project 2 Name</h3>
            <p>{context.createReview('Project 2')}</p>
          </li>
        </ul>

        {/* Strategy Pattern Usage */}
        <button className={styles.strategyButton} onClick={() => handleStrategyChange('quick')}>Quick Review</button>
        <button className={styles.strategyButton} onClick={() => handleStrategyChange('detailed')}>Detailed Review</button>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Halee&apos;s Website</p>
      </footer>
    </div>
  );
}
