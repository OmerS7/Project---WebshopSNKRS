import React, { useState, useEffect } from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import CardHome from "../molecules/ContentHome3";
import products from "../atoms/products/Products";
import ImageHome from "../molecules/ContentHome1";
import "./_homepage.styles.scss";
import ImageSecondHome from "../molecules/ContentHome2";

function HomePage() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const card = document.querySelector(".card-home");
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight * 1.5) {
        setIsCardVisible(true);
      } else {
        setIsCardVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="HomePage">
      <div className="Header">
        <Header />
      </div>
      <div className="imagesNikeShoe">
        <ImageHome />
      </div>
      <div className="imageModels">
        <ImageSecondHome />
      </div>
      <div className={`card-home ${isCardVisible ? "active" : ""}`}>
        <CardHome products={products.slice(0, 12)} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;