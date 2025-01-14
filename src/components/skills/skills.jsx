import ContactForm from "../ContactForm/ContactForm";
import style from "./skills.module.css";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="contact">
      <div className={style.mydiv}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
        >
          Get in <span className={style.span}> touch</span>
        </motion.h2>
        <ContactForm />
      </div>
    </section>
  );
}
