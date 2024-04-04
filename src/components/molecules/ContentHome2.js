import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Model1 from "../styles/img/AirJordan1Chicago.png";
import ColorChicago from "../styles/img/ColorChicago.png";
import Model2 from "../styles/img/JordanXTravisLow.png";
import Model3 from "../styles/img/TravisScottJacket.png";
import Model4 from "../styles/img/MJordan.png";
import products from "../atoms/products/Products";
import PngImage from "../atoms/Images/Image";
import "./_contentHome2.styles.scss";
import Text from "../atoms/Texts/Text";

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


  const content = (
    <>
    In the late 1980s and early 1990s, one man not only transformed the world of basketball
    <br />
     but also revolutionized the sneaker industry. His name is  Michael Jordan, and his influence
    <br />
     on both sports and popular culture was unparalleled.
    <br /> <br />
    Jordan quickly became a global sensation. But it wasn't just his game that captivated people; it was also his SNKRS.    
    </>
  )

  return (
    <div className="background">
        <div className="textJordan">
          <Text content={content} />
         </div>
      <div className="containerModel1">
        <Link to={`/productdetail/${products[17].id}`}>
          <PngImage src={Model3} alt={"Model shoe"} className="model3" />
        </Link>          
        <div className="model1">
          <Link to={`/productdetail/${products[16].id}`}>
            <img src={Model1} alt="Model shoe" />
            <img src={ColorChicago} alt="Model shoe" />
          </Link>
        </div>
        <Link to={`/productdetail/${products[14].id}`}>
          <PngImage src={Model2} alt={"Model shoe"} className="model2" />
        </Link>
          <PngImage src={Model4} alt={"Model shoe"} className="model4" />
        </div>
    </div>
  );
};

export default ImageSecondHome;