import React from "react";
import Carousel from "../carousel/Carousel";
import styles from "./HomeContent.module.scss";

const formatTitle = ({title, type}) => {
  const pinkTitle = (text) => (
    <h2 className={styles["title-text-pink"]}>{text.replaceAll("**", "")} </h2>
  );

  const defaultTitle = (text) => (
    <h2 className={styles["title-text"]}>{text}</h2>
  );

  if (type === "large" || type === "categories") {
    const titleArr = title.split(" . ");

    return (
      <>
        {titleArr.map((item) => {
          const isPink = item.includes("**");

          return isPink ? pinkTitle(item) : defaultTitle(item);
        })}
      </>
    );
  } else {
    return defaultTitle(title);
  }
};

export default function HomeContent({ dataModules }) {
  return (
    <div className={styles.container}>
      {dataModules.isSuccess
        ? dataModules.data.modules.map((module, indx) => (
            <div key={indx} className={styles.carousel}>
              <div className={styles.title}>
                {formatTitle(module)}
              </div>
              <Carousel items={module.items} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
