import React from "react";
import { HAYU_LOGO_WHITE } from "../../consts/Consts";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <img src={HAYU_LOGO_WHITE} alt="hayu logo" />
      </div>
      <div>social And Market</div>

      <div>navLinks</div>

      <div>description</div>
    </div>
  );
}
