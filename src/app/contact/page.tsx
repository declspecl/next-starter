'use client';
import styles from "../page.module.css";
import { useState } from 'react';

export default function Contact() {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to a server)
        console.log('Subject:', subject);
        console.log('Email:', email);
        console.log('Content:', content);
        alert('Form submitted! (Check console for data)');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Contact Me</h1>
            </header>
            <main className={styles.main}>
                <section className={styles.section}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="content">Content:</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 Pankaj's Website</p>
            </footer>
        </div>
    );
}
