import React, { useRef } from "react";
import Carousel from "../carousel/Carousel";
import styles from "./HomeContent.module.scss";

export default function HomeContent({ dataModules }) {
  // const moduleTitle = useRef(null);
  return (
    <div className={styles.container}>
      {dataModules.isSuccess
        ? dataModules.data.modules.map((module, indx) => (
            <div key={indx} className={styles.carousel}>
              <div className={styles.title}>
                <h2 className={styles["title-text"]}>{module.title}</h2>
              </div>
              <Carousel items={module.items} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
