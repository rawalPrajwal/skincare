import React, { useState } from "react";
import Header from "./header/header-section";
import ImageSlider from "./imgslider/imageSlider";
import ImageCart from "./imagecart/imagecart";
import SliderData from "../data/sliderData";
import Card from "./displayCard/card";
// import CardOne from "./CardOne";

const Home = ({ setProductId, active, count, setCount }) => {
  // const [active, setActive] = useState("skin");

  // const handleActive = (active) => {
  //   setActive(active);
  // };
  return (
    <>
      {/* <Header setActive={setActive} handleActive={handleActive} /> */}
      <ImageSlider slides={SliderData} />
      <ImageCart />

      <h1
        style={{
          color: "black",
          fontSize: "20px",
          fontWeight: 400,
          marginLeft: "30px",
        }}
      >
        Hair Care
      </h1>
      <Card
        active={active}
        setProductId={setProductId}
        count={count}
        setCount={setCount}
      />

      {/* <CardOne active={active} /> */}
    </>
  );
};

export default Home;
