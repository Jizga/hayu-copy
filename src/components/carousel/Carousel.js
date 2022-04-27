import React from "react";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";

const defaultImagen =
  "https://cdn.pixabay.com/photo/2015/12/22/08/06/face-1103708__480.jpg";
export default function Carousel({ items }) {
  return (
    <div className={styles["card-container"]}>
      {items?.map((item) => (
        <div key={item.id} className={styles.card}>
          <img
            src={
              item.image
                ? item.image
                : item.images?.default
                ? defaultImagen
                : item.images["16x9"] || item.images["1x1"]
            }
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.object,
};
