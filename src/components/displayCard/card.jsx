import { useState } from "react";
import styles from "./Card.module.css";
import ProductList from "../../data/data";
import HairProduct from "../../data/HairProduct";
import BabyProducts from "../../data/babyProduct";

const Card = ({ active, addToCart, setProductId, setCount, count }) => {
  const [notification, setNotification] = useState("");

  let displayCard;
  if (active === "skin") {
    displayCard = ProductList;
  } else if (active === "hair") {
    displayCard = HairProduct;
  } else {
    displayCard = BabyProducts; // Make sure you are referencing the correct import here
  }

  const handleAddToCart = (product) => {
    setProductId(product.id);

    setCount((prev) => prev + 1);
    console.log("added", count);
    // addToCart(product); // Add product to cart
    setNotification(`${product.title} added to cart!`); // Show notification

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div>
      {notification && (
        <div className={styles.notification}>{notification}</div>
      )}
      <div className={styles.productContainer}>
        {displayCard.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              className={styles.productImg}
              src={product.img}
              alt="Product Image"
            />
            <h3 className={styles.rating}>{product.rating}</h3>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <span className={styles.productVolume}>
              {product.product_volume}
            </span>
            <span className={styles.productPrice}>{product.price}</span>
            <button
              className={styles.cartBtn}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
