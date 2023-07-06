import styles from "./Homepage.module.css";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Homepage() {
  return (
    <body className={styles.homepage}>
      <section className={styles.hero}>
        <Zoom delay={400}>
          <h2>
            Computer Engineer <span className={styles.name}>Alex Guo</span>{" "}
            @UToronto Computer Engineering
          </h2>
        </Zoom>
      </section>

      <section>
        <Zoom delay={300}>
          <h2>ABOUT ME</h2>
          <div className={styles.aboutSection}>
            <p>
              Passionate undergraduate computer engineer with interests in
              learning new technologies and programming skills at Canada&apos;s
              #1 university.
            </p>
            <img src="./selfphoto.jpg"></img>
          </div>
          <button className={styles.btn}>Resume</button>
        </Zoom>
      </section>

      <section className={styles.blue}>
        <div className={styles.waveTop}></div>
        <Zoom delay={300}>
          <h2>PROJECTS</h2>
          <p>Currently Under Construction</p>
        </Zoom>
        <div className={styles.waveBottom}></div>
      </section>
      <footer className={styles.footer}>
        <Zoom delay={300}>
          <h2>CONTACTS</h2>

          <div className={styles.socialLinks}>
            <a>
              <FontAwesomeIcon icon={faEnvelope} className={styles.specBtn} />
            </a>
            <a>
              <FontAwesomeIcon icon={faGithub} className={styles.specBtn} />
            </a>
            <a>
              <FontAwesomeIcon icon={faLinkedin} className={styles.specBtn} />
            </a>
          </div>
        </Zoom>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Alex Guo
        </p>
      </footer>
    </body>
  );
}
