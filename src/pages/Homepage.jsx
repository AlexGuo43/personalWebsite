/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
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
              Forward and analytical undergraduate computer engineer with
              interests in learning new technologies and programming skills at
              Canada&apos;s #1 university.
            </p>
            <img src="./selfphoto.jpg"></img>
          </div>
          {/* <a
            href="https://drive.google.com/file/d/1Wb80e9mbIlZkMqdvHhHHwMyq24fn6A9L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <Link to="/resume">
            <button className={styles.btn}>Resume</button>
          </Link>
          {/* </a> */}
        </Zoom>
      </section>

      <section style = {{gap:0}}>
        <div className={styles.waveTop}></div>
        <div style={{backgroundColor: '#0066ff', margin:0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem',height:'45rem'}}>
          <Zoom delay={300}>
              <h2 className={styles.whiteFont}>PROJECTS</h2>
              <div className={styles.projectsTitle}>Today-i-learned</div>
              <div className={styles.projects}>
                <p>
                  Making a full stack web application to learn frontend and backend
                  technologies. The app features an online forum where users can
                  upload an interesting fact which can be upvoted or downvoted, with
                  upvoted facts showing first.
                </p>
                <img src="./todayilearned.PNG"></img>
              </div>
              <div className={styles.projectsLink}>
                <a
                  href="https://alexguo43.github.io/today-i-learned/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.btn2}>Live</button>
                </a>
                <a
                  href="https://github.com/AlexGuo43/today-i-learned"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.btn2}>Source code</button>
                </a>
              </div>
          </Zoom>
        </div>
        <div className={styles.waveBottom}></div>
      </section>
      <footer className={styles.footer}>
        <Zoom delay={300}>
          <h2>CONTACTS</h2>

          <div className={styles.socialLinks}>
            <a
              href="mailto:alexander.guo@mail.utoronto.ca"
              target="_bank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className={styles.specBtn} />
            </a>
            <a
              href="https://github.com/AlexGuo43"
              target="_bank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.specBtn}
                color="#171515"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/alexguo2000/"
              target="_bank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.specBtn}
                color="#0A66C2"
              />
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
