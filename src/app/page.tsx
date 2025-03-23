import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>hello</p>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact Me</Link>
    </div>
  );
}
