import React, { useContext, useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShoppingCartContext from '../atoms/ShoppingCard';
import products from '../atoms/products/Products';
import Button from '../atoms/Buttons/Button';
import Header from './Header';
import Footer from './Footer';
import Text from '../atoms/Texts/Text';
import { faArrowLeft, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './_product.styles.scss';
import DropdownMenu from '../atoms/Buttons/Dropdown';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));
  const { addToCart } = useContext(ShoppingCartContext);
  const [showAlert, setShowAlert] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); 
  const timeoutRef = useRef(null); 

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: product.id,
        price: product.price,
        quantity: 1,
        imgSrc: product.imgSrc,
        size: selectedSize, 
      });
      setShowAlert(product.imgSrc);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowAlert(null);
        timeoutRef.current = null;
      }, 2000);
    } else {
      alert('Selecteer eerst een maat.'); 
    }
  };

  useEffect(() => {
    if (showAlert) {
      const alertElement = document.querySelector('.alert');
      if (alertElement) {
        setTimeout(() => {
          alertElement.classList.add('slideOut');
        }, 1501);
      }
    }
  }, [showAlert]);

  const handleGoBack = () => {
    window.history.back(); 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {showAlert && (
        <div className="alert">
          <img src={showAlert} alt="Product added to cart" className="alert-image" />
          <p>Added to cart</p>
        </div>
      )}
    <div className="Header1">
        <Header />
      </div>      
      <div className="productDetail">
        <div className="detailHeading">
          <h1>{product.name}</h1>
          <p>€{product.price.toFixed(2)}</p>
        </div>
        <img src={product.imgSrc} alt={product.name} />
        <div className="buttonBack">
          <Button variant="back" icon={faArrowLeft} onClick={handleGoBack} />
        </div>
      </div>
      <div className="contentBottom">
        <div className="description">
          <Text content={product.description} />
        </div>
        <DropdownMenu options={product.sizes} onSelect={setSelectedSize} />
        <Button onClick={handleAddToCart} variant="tertiary" label={'Add to '} icon={faBagShopping} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;