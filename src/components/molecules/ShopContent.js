import React, { useEffect } from 'react';
import ProductCard from './ProductCard'; // Importeer de ProductCard-component
import products from '../atoms/products/Products';
import './_shopContent.styles.scss';

const ShopContent = () => {
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Pas de grootte aan op basis van het schermformaat
  const rowsOfProducts = window.innerWidth <= 768 ? chunkArray(products, 2) : chunkArray(products, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='contentFullshop'>
      <div className='contentShop'>  
        <h1>ALL SNKRS</h1>
        {rowsOfProducts.map((row, index) => (
          <div className="row" key={index}>
            {row.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}
      </div>  
    </div>
  );
};

export default ShopContent;