import React, { useContext, useState, useRef, useEffect } from "react";
import PngImage from "../atoms/Images/Image";
import Button from "../atoms/Buttons/Button";
import Text from "../atoms/Texts/Text";
import './_cardHome.styles.scss';
// import { faBagShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartContext from "../atoms/ShoppingCard";
import { Link } from "react-router-dom";

const CardHome = ({ products }) => {
  // eslint-disable-next-line
  const { addToCart } = useContext(ShoppingCartContext);
  // eslint-disable-next-line
  const [showAlert, setShowAlert] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  // eslint-disable-next-line
  const timeoutRef = useRef(null); // Ref voor timeout

  // const handleAddToCart = (item) => {
  //   addToCart(item);
  //   setShowAlert(item.imgSrc);
  //   // Annuleer eerst de vorige timeout als deze bestaat
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  //   // Start vervolgens de nieuwe timeout
  //   timeoutRef.current = setTimeout(() => {
  //     setShowAlert(null);
  //     // Reset timeoutRef.current naar null
  //     timeoutRef.current = null;
  //   }, 2000);
    
  //   setTimeout(() => {
  //       document.querySelector('.alert').classList.add('slideOut');
  //     }, 1500);
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentCardIndex, products.length]);

  return (
    <div className="z-index">
      {showAlert && (
        <div className="alert">
          <img src={showAlert} alt="Product added to cart" className="alert-image" />
          <p>Added to cart</p>
        </div>
      )}
 
      <div className="content">
        <div className="card1">
          <div className="contentTwo">
            <div className="card">
              <div className="cardContent">
                <p>feel the</p>
                <Link to={`/productdetail/${products[currentCardIndex].id}`}>
                  <PngImage src={products[currentCardIndex].imgSrc} alt={products[currentCardIndex].name} className="shoe" />
                </Link>
                <p>heat</p>                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentBelow">
        <div className="textUnder">
            <Text content={'SNKRS RELEASE THIS WEEK'} />
        </div>
        <div className="buttonShop">
          <Link to='/shop'><Button variant={'tertiary'} label={'Shop'} /></Link>
        </div>
      </div>
    </div>
  );
};

export default CardHome;