// src/components/imagecart/imagecart.jsx
import React from "react";
import { imageCartData } from "../../data/imageCartData"; // Import image data
import styles from "./imagecart.module.css"; // Your CSS module

const ImageCart = () => {
  return (
    <div className={styles.imageCart}>
      {imageCartData.map((image, index) => (
        <img
          key={index} // Use the index as a key (or another unique identifier if available)
          src={image.src}
          alt={image.alt}
          className={styles.imgCart} // Apply the styles to each image
        />
      ))}
    </div>
  );
};

export default ImageCart;
