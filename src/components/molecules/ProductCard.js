import React from 'react';
import PngImage from '../atoms/Images/Image';
import Text from '../atoms/Texts/Text';
import { Link } from 'react-router-dom';
import './_productCard.styles.scss';

const ProductCard = ({ product }) => {
  return (
    <div className={`card10 ${product.id === 18 ? 'special-product' : ''}`}>
      <div className="content10">
        <div className="cardContent10">
          <Text content={product.name} />
          <div className='price10'>
            <Text content={`€${product.price.toFixed(2)}`} />
          </div>
          <Link to={`/productdetail/${product.id}`}>
            <PngImage src={product.imgSrc} alt={product.name} className="shoe10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;