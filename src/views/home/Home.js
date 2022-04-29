import React from "react";
import Footer from "../../components/footer/Footer";
import HomeContent from "../../components/homeContent/HomeContent";
import Navbar from "../../components/navbar/Navbar";
import UseFetchDataModules from "../../services/UseFetchDataModules";
import styles from "./Home.module.scss";

export default function Home() {
  // API call
  const dataModules = UseFetchDataModules();

  return (
    <div>
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
