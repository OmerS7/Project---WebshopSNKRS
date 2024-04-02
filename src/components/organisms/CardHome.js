import React, { useState, useEffect } from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import CardHome from "../organisms/CardHome";
import ImageHome from "../molecules/ImageHome";
import products from "../atoms/products/Products";

function HomePage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HomePage">
      <Header />
      <div className="imagesNikeShoe">
        <ImageHome />
      </div>
      <div className="card-container">
        {products.map((card, index) => (
          <div
            key={index}
            className={`card-home ${index === currentCardIndex ? "active" : ""}`}
          >
            <CardHome key={card.id} items={card} /> 
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;