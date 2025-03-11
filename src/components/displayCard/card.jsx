import { useState } from "react";
import styles from "./Card.module.css";
import ProductList from "../../data/skinProduct";
import HairProduct from "../../data/HairProduct";
import BabyProducts from "../../data/babyProduct";

const Card = ({ active, addToCart, setProductId, setCount, count, query }) => {
  const [notification, setNotification] = useState("");
  const [imageErrors, setImageErrors] = useState({});

  // Get the active category for display
  let displayCard;
  if (active === "skin") {
    displayCard = ProductList;
  } else if (active === "hair") {
    displayCard = HairProduct;
  } else {
    displayCard = BabyProducts;
  }

  // Create uniquely keyed product arrays by adding category prefix to ids
  const uniqueSkinProducts = ProductList.map((product) => ({
    ...product,
    uniqueId: `skin_${product.id}`,
  }));

  const uniqueHairProducts = HairProduct.map((product) => ({
    ...product,
    uniqueId: `hair_${product.id}`,
  }));

  const uniqueBabyProducts = BabyProducts.map((product) => ({
    ...product,
    uniqueId: `baby_${product.id}`,
  }));

  // Combined array for filtering across all products with unique keys
  const allProducts = [
    ...uniqueSkinProducts,
    ...uniqueHairProducts,
    ...uniqueBabyProducts,
  ];

  // Choose display array based on active category with unique keys
  const uniqueDisplayCard =
    active === "skin"
      ? uniqueSkinProducts
      : active === "hair"
      ? uniqueHairProducts
      : uniqueBabyProducts;

  // Filter products based on query
  const filteredProducts = query
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : uniqueDisplayCard;

  const handleAddToCart = (product) => {
    // Use the original id for cart functionality
    setProductId(product.id);
    setCount((prev) => prev + 1);
    console.log("added", count);
    // addToCart(product);
    setNotification(`${product.title} added to cart!`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const handleImageError = (productId) => {
    setImageErrors((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  return (
    <>
      <div>
        {notification && (
          <div className={styles.notification}>{notification}</div>
        )}
        <div className={styles.productContainer}>
          {filteredProducts.map((product) => (
            <div key={product.uniqueId} className={styles.productCard}>
              {imageErrors[product.uniqueId] ? (
                <div
                  className={styles.productImg}
                  style={{
                    background: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "200px",
                    color: "#666",
                  }}
                >
                  {product.title}
                </div>
              ) : (
                <img
                  className={styles.productImg}
                  src={product.img}
                  alt={product.title}
                  onError={() => handleImageError(product.uniqueId)}
                />
              )}
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
    </>
  );
};

export default Card;
