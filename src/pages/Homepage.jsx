import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <body className={styles.homepage}>
      <section className={styles.top}>
        <h2>Alex Guo UofT Computer Engineering</h2>
      </section>
      <section>
        <h2>About me</h2>
        <div className={styles.waveTop}></div>
      </section>

      <section className={styles.blue}>
        <h2>Projects</h2>
      </section>
      <section>
        <div className={styles.waveBottom}></div>
        <h2>Contacts</h2>
      </section>
    </body>
  );
}
