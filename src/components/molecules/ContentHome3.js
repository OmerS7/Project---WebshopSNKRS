import React, { useState, useEffect } from "react";
import PngImage from "../atoms/Images/Image";
import Button from "../atoms/Buttons/Button";
import Text from "../atoms/Texts/Text";
import './_contentHome3.styles.scss';
import { Link } from "react-router-dom";

const CardHome = ({ products }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCardIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentCardIndex, products.length]);

  return (
    <div className="content-home">
      <div className="card">
        <p className="feel">feel the</p>
        <Link to={`/productdetail/${products[currentCardIndex].id}`}>
          <PngImage src={products[currentCardIndex].imgSrc} alt={products[currentCardIndex].name} className="shoe" />
        </Link>
        <p className="heat">heat</p>
      </div>
      <div className="content-below">
        <Text content={'SNKRS RELEASE THIS WEEK'} />
        <div className="button-shop">
          <Link to='/shop'><Button variant={'tertiary'} label={'Shop'} /></Link>
        </div>
      </div>
    </div>
  );
};

export default CardHome;