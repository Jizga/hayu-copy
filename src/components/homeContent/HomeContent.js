import React, { useEffect } from "react";
import { useGlobalContext } from "../../contexts/GobalContext";
import Carousel from "../carousel/Carousel";
import styles from "./HomeContent.module.scss";

export default function HomeContent() {
  const { data, setData } = useGlobalContext();

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          "https://api.stg.hayu.com/page/home?platform=web"
        );
        response = await response.json();
        setData(response);
      } catch (e) {
        console.error(`Error from database -- ${e}`);
      }
    };

    getData();
  }, [setData]);

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
