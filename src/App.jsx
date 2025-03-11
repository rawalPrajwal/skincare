import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/displayCard/card";
import Header from "./components/header/header-section";
import Cart from "./components/cart/cart";
import { useEffect, useState } from "react";
import { AuthRoutes } from "../../modules/auth/utils/route";
import ProductList from "./data/skinProduct";
import ImageSlider from "./components/imgslider/imageSlider";
import ImageCart from "./components/imagecart/imagecart";
import Login from "../../modules/auth/login";
import Home from "./components/Home";
import Register from "../../modules/auth/register";

function App() {
  const [productID, setProductId] = useState(null);

  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    if (productID !== null) {
      const filteredObject = ProductList.filter(
        (product) => product.id === productID
      );
      setCartAllProduct((prevCart) => [...prevCart, ...filteredObject]);
    }
  }, [productID]);
  const [active, setActive] = useState("skin");

  const handleActive = (active) => {
    setActive(active);
  };
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <>
      <Router>
        <Header
          setActive={setActive}
          handleActive={handleActive}
          count={count} 
          setQuery={setQuery}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setProductId={setProductId}
                active={active}
                count={count}
                setCount={setCount}
                query={query}
              />
            }
          />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartAllProduct={cartAllProduct}
                setCartAllProduct={setCartAllProduct}
                setCount={setCount} 
              />
            }
          />
          {AuthRoutes}
        </Routes>

        {/* <h1
        style={{
          color: "black",
          fontSize: "24px",
          fontWeight: "bold",
          marginLeft: "30px",
        }}
      >
        Hair Care
      </h1>
      <Card setProductId={setProductId} /> */}
      </Router>
    </>
  );
}

export default App;
