import React from "react";
import { useGlobalContext } from "../../contexts/GobalContext";
import Carousel from "../carousel/Carousel";
import styles from "./HomeContent.module.scss";

export default function HomeContent() {
  const { data } = useGlobalContext();
  return (
    <div className={styles.container}>
      {data?.modules?.length
        ? data.modules.map((module, indx) => (
            <div key={indx} className={styles.carousel}>
              <h2>{module.title}</h2>
              <Carousel items={module.items} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
