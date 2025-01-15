import style from "./about.module.css";
import Header from "../header/header";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <Header />
      <div className={style.mydiv}>
        <div className={style.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={style.intro}>
              Hello <span className={style.highlight}>I'm</span>
            </h1>
            <h2 className={style.name}>Yosef Palas</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className={style.jobTitle}>Front End Developer.</h1>
            <p className={style.description}>
              A little about me:
              <br /> with 3 years of experience in designing, developing and
              maintaining diverse web applications. Experienced in various
              technologies and problem solving.A dedicated team player who is
              passionate about innovation and learning new things, efficiency
              and continuous self-learning ability, has high sociability and
              quick integration into the team, and even strives for great
              professionalism.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h2 className={style.talk}>Let's talk</h2>
            <ul className={style.links}>
              <li>
                <a
                  href="https://www.linkedin.com/in/yosef-palas-46345824a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
