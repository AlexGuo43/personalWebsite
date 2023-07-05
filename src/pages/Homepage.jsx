import styles from "./Homepage.module.css";
import Zoom from "react-reveal/Zoom";

export default function Homepage() {
  return (
    <body className={styles.homepage}>
      <section className={styles.hero}>
        <Zoom>
          <h2>Computer Engineer Alex Guo @UofT Computer Engineering</h2>
        </Zoom>
      </section>

      <section>
        <Zoom>
          <h2>ABOUT ME</h2>
          <p>
            Passionate undergraduate computer engineer with interests in
            learning new technologies and programming skills at Canada&apos;s #1
            university.
          </p>
          <button>Resume</button>
        </Zoom>
      </section>

      <section className={styles.blue}>
        <div className={styles.waveTop}></div>
        <Zoom>
          <h2>PROJECTS</h2>
          <p>Currently Under Construction</p>
        </Zoom>
        <div className={styles.waveBottom}></div>
      </section>
      <footer className={styles.footer}>
        <Zoom>
          <h2>CONTACTS</h2>
        </Zoom>
        <div className={styles.socialLinks}>
          <a>Email</a>
          <a>Github</a>
          <a>LinkedIn</a>
        </div>
      </footer>
    </body>
  );
}
