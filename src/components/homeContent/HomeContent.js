import React from "react";
import Carousel from "../carousel/Carousel";
import styles from "./HomeContent.module.scss";

export default function HomeContent({ dataModules }) {
  return (
    <div className={styles.container}>
      {dataModules.isSuccess
        ? dataModules.data.modules.map((module, indx) => (
            <div key={indx} className={styles.carousel}>
              <h2>{module.title}</h2>
              <Carousel items={module.items} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
