import React from "react";
import Footer from "../../components/footer/Footer";
import HomeContent from "../../components/homeContent/HomeContent";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
}
