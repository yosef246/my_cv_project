import style from "./header.module.css";

export default function Header() {
  return (
    <section id="header">
      <div className={style.mydiv}>
        <div className={style.container}>
          <div className={style.titleContainer}>
            <h2>
              Yosef <span className={style.span}>Palas</span>
            </h2>
          </div>

          <ul className={style.navList}>
            <li>
              <a href="#contact">To Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
