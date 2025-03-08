import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./imageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Handle automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000); // 5 seconds for each slide

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={styles["left-arrow"]}
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className={styles["right-arrow"]}
        onClick={nextSlide}
      />

      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${styles.slide} ${styles.active}`
                : styles.slide
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="Slide image"
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
