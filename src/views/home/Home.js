import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import HomeContent from "../../components/homeContent/HomeContent";
import Navbar from "../../components/navbar/Navbar";
import UseFetchDataModules from "../../services/UseFetchDataModules";
import styles from "./Home.module.scss";

export default function Home() {
  // API call
  const dataModules = UseFetchDataModules();

  const divRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  // const scrollTop = divRef?.current.scrollTop;

  const onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = divRef?.current.scrollTop;
    console.log(
      `onScroll, window.scrollY: ${scrollY} divRef.scrollTop: ${scrollTop}`
    );
    setScrollPosition(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [scrollPosition]);

  return (
    <div ref={divRef} onScroll={onScroll}>
      <Navbar />

      <div className={styles["imagen-home"]}>
        <img
          src={dataModules.data?.hero?.items[0]?.images["16x9"]}
          alt={dataModules.data?.name}
          className={styles.imagen}
        />
      </div>
      <HomeContent dataModules={dataModules} />
      <Footer />
    </div>
  );
}
