import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CARD_WIDTH,
  CARD_WHITE_SPACE,
  DEFAULT_IMAGEN,
} from "../../consts/Consts";

export default function Carousel({ items }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardElementsNumber, setcardElementsNumber] = useState(0);
  const [carouselElemnts, setCarouselElemnts] = useState([]);
  const [arrowClick, setarrowClick] = useState(0);

  const previous = () => {
    if (arrowClick >= 1) {
      carouselElemnts.unshift(items[arrowClick - 1]);
      carouselElemnts.pop();
      setCarouselElemnts(carouselElemnts);
      setarrowClick((p) => p - 1);
    }
  };

  const next = () => {
    if (items[cardElementsNumber + arrowClick]) {
      carouselElemnts.shift();
      carouselElemnts.push(items[cardElementsNumber + arrowClick]);
      setCarouselElemnts(carouselElemnts);
      setarrowClick((p) => p + 1);
    }
  };

  useEffect(() => {
    // Cards number inside the carousel is adapting to the width of the screen
    setcardElementsNumber(
      Math.trunc(screenWidth / (CARD_WIDTH + CARD_WHITE_SPACE))
    );
    const elements = items.slice(0, cardElementsNumber);
    setCarouselElemnts(elements);
  }, [screenWidth, cardElementsNumber, items]);

  useEffect(() => {
    // Listen window resize event
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    // Stop listening when component is unmounted
    return () => {
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <div className={styles["card-container"]}>
      <FontAwesomeIcon
        icon={solid("circle-chevron-left")}
        className={styles["arrow-left"]}
        onClick={() => previous()}
      />
      {carouselElemnts?.map((item) => (
        <div key={item.id} className={styles.card}>
          <img
            src={
              item.image
                ? item.image
                : item.images?.default
                ? DEFAULT_IMAGEN
                : item.images["16x9"] || item.images["1x1"]
            }
            alt={item.title}
          />
        </div>
      ))}
      <FontAwesomeIcon
        icon={solid("circle-chevron-right")}
        className={styles["arrow-right"]}
        onClick={() => next()}
      />
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.array,
};
