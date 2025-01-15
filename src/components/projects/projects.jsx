import style from "./projects.module.css";
import ImagesSlideShow from "../images/images-slideshow";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects">
      <div className={style.mydiv}>
        <ImagesSlideShow />
        <div className={style.container}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            className={style.intro}
          >
            About <span className={style.highlight}>my porjects</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <h1 className={style.jobTitle}>"ToDo"</h1>
            <p className={style.description}>
              A responsive site that deals with creating personal comments by
              connecting the user <br /> or registering a new user, the user is
              saved on the server by a personal token and thus can <br /> create
              personal comments where he can write information and even change
              or delete <br />
              the same information, the project is done in Next.js with server A
              MongoDB aside, <br /> plus there are token validation checks and
              other details that the user enters for validations.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
              className={style.button}
            >
              <a
                href="https://github.com/yosef246/todo-project-with-next.js"
                target="_blank"
              >
                View code
              </a>
            </motion.button>{" "}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
              className={style.button}
            >
              <a
                href="https://todo-project-with-next-js.vercel.app"
                target="_blank"
              >
                to webSite
              </a>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <h1 className={style.jobTitle}>"Food-menu"</h1>
            <p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4 }}
              className={style.description}
            >
              A responsive website built with Next.js, featuring a dynamic menu
              of dishes. Users can <br /> view details about each dish,
              including ingredients and a description. Additionally, <br /> the
              website allows users to share their favorite dishes with the
              community, <br />
              fostering engagement and interaction among food enthusiasts.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
              className={style.button}
            >
              <a
                href="https://github.com/yosef246/food-meals-with-Next.js"
                target="_blank"
              >
                View code
              </a>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <h1 className={style.jobTitle}>"Challenge Tracker"</h1>
            <p className={style.description}>
              An interactive website built with React that allows users to
              create personal challenges,
              <br /> mark whether they succeeded or failed, and calculate how
              many challenges were completed <br />
              successfully and how many were not. The design includes dynamic
              animations developed
              <br /> with the Framer Motion library, providing an engaging and
              enjoyable user experience.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5 }}
              className={style.button}
            >
              <a
                href="https://github.com/yosef246/project-with-framer-motion-react"
                target="_blank"
              >
                View code
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
