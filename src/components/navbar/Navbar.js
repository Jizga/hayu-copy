import React from "react";
import { HAYU_LOGO } from "../../consts/Consts";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div>
        <img src={HAYU_LOGO} alt="hayu logo"/>
      </div>
      <div className={styles["btns-container"]}>
        <h2 className={styles.btn}>Login btn</h2>
        <h2 className={styles.btn}>Help btn</h2>
        <h2 className={styles.btn}>Search btn</h2>
      </div>
    </div>
  );
}
