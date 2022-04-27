import React from "react";
import Carousel from "../carousel/Carousel";
import styles from "./HomeContent.module.scss";

export default function HomeContent() {
  return (
    <div className={styles.container}>
      <div>
        <h2>FRESH </h2>
        <h2>FROM THE U.S.</h2>
        <Carousel />
      </div>
      <div>
        <h2>hayu</h2>
        <h2>CATEGORIES</h2>
        <Carousel />
      </div>
      <div>
        <h2>CURRENT</h2>
        <h2>SEASONS</h2>
        <Carousel />
      </div>
      <div>
        <h2>THE</h2>
        <h2>REAL HOUSEWIVES</h2>
        <Carousel />
      </div>
      <div>
        <h2>ADDICTIVE</h2>
        <h2>DRAMA</h2>
        <Carousel />
      </div>
      <div>
        <h2>SUN</h2>
        <h2>& SEA</h2>
        <Carousel />
      </div>
      <div>
        <h2>A DAY</h2>
        <h2>IN THE LIFE</h2>
        <Carousel />
      </div>
      <div>
        <h2>RECENT</h2>
        <h2> FULL SEASONS</h2>
        <Carousel />
      </div>
      <div>
        <h2>SUPER</h2>
        <h2>RICH</h2>
        <Carousel />
      </div>
      <div>
        <h2>DYNAMIC</h2>
        <h2>DUOS</h2>
        <Carousel />
      </div>
      <div>
        <h2>TRUE</h2>
        <h2>CRIME</h2>
        <Carousel />
      </div>
      <div>
        <h2>NO PLACE</h2>
        <h2>LIKE HOME</h2>
        <Carousel />
      </div>
      <div>
        <h2>KARDASHIAN</h2>
        <h2>KOLLECTION</h2>
        <Carousel />
      </div>
    </div>
  );
}
