import style from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [clicked, setClicked] = useState(false);

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
