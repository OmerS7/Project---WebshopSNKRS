import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Model1 from "../styles/img/nikeBlackDunk.png";
import Model2 from "../styles/img/nikeAirMaxGreen.png";
import Model3 from "../styles/img/TravisScottJacket.png";
import Model4 from "../styles/img/MJordan.png";
import products from "../atoms/products/Products";
import PngImage from "../atoms/Images/Image";
import "./_ImageSecondHome.scss";

const ImageSecondHome = () => {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".containerModel1");
      const windowHeight = window.innerHeight;

      images.forEach((image) => {
        const imageTop = image.getBoundingClientRect().top;
        if (imageTop < windowHeight) {
          image.classList.add("animate-image");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="containerModel1">
        <Link to={`/productdetail/${products[17].id}`}>
          <PngImage src={Model3} alt={"Model shoe"} className="model3" />
        </Link>          
        <Link to={`/productdetail/${products[16].id}`}>
          <PngImage src={Model1} alt={"Model shoe"} className="model1" />
        </Link>
        <Link to={`/productdetail/${products[14].id}`}>
          <PngImage src={Model2} alt={"Model shoe"} className="model2" />
        </Link>
          <PngImage src={Model4} alt={"Model shoe"} className="model4" />
        </div>
    </div>
  );
};

export default ImageSecondHome;