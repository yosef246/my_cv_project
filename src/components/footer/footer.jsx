import style from "./footer.module.css";

export default function Fotter() {
  return (
    <section id="footer">
      <footer className={style.footer}>
        <h2 className={style.talk}>
          Be <span>Contact</span>
        </h2>

        <ul>
          <a href="https://github.com/yosef246" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yosef-palas-46345824a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </ul>
        <div className={style.conection}>
          <p>
            <i className="fas fa-phone"> </i> 0523262127
          </p>
          <p>
            <i className="fas fa-envelope"> </i> yosefpalas@gmail.com
          </p>
        </div>

        <p className={style.reserved}>
          © 2024 Yossef Palas.
          <br /> All rights reserved
        </p>
      </footer>
    </section>
  );
}
