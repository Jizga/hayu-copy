import React from "react";
import PropTypes from "prop-types";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HAYU_LOGO } from "../../consts/Consts";
import styles from "./Navbar.module.scss";

export default function Navbar( ) {
  // console.log("onScroll en Navbar : ", onScroll);

  return (
    // USE A TERNARY BY CHANGE THE STYLE AND LOGO WHEN I KNOW HOW TO GET THE HOME PAGE' SCROLL
    <div className={styles["nav-init"]}>
      <div>
        <img src={HAYU_LOGO} alt="hayu logo" />
      </div>
      <div className={styles["btns-container"]}>
        <div className={styles["sign-in-btn"]}>
          <FontAwesomeIcon icon={solid("right-to-bracket")} />
          <span> SIGN IN </span>
        </div>
        <div className={styles.btn}>
          <FontAwesomeIcon icon={solid("question")} />
        </div>
        <div className={styles.btn}>
          <FontAwesomeIcon icon={solid("magnifying-glass")} />
        </div>
      </div>
    </div>
  );
}

// Navbar.propTypes = {
//   onScroll: PropTypes.bool,
// };
