import React, { useEffect } from 'react';
// import Button from '../atoms/Buttons/Button'; // Importeer de benodigde componenten
import PngImage from '../atoms/Images/Image';
import Text from '../atoms/Texts/Text';
// import { faBagShopping,  } from '@fortawesome/free-solid-svg-icons';
// import ShoppingCartContext from '../atoms/ShoppingCard';
import products from '../atoms/products/Products';
import './_shopContent.styles.scss';
import { Link } from 'react-router-dom';

const ShopContent = () => {
  // const { addToCart } = useContext(ShoppingCartContext);
  // const [showAlert, setShowAlert] = useState(null);
  // const timeoutRef = useRef(null); 

  // const handleAddToCart = (item) => {
  //   addToCart(item);
  //   setShowAlert(item.imgSrc);
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  //   timeoutRef.current = setTimeout(() => {
  //     setShowAlert(null);
  //     timeoutRef.current = null;
  //   }, 2000);
    
  //   setTimeout(() => {
  //       document.querySelector('.alert').classList.add('slideOut');
  //     }, 1500);
  // };
  
    const chunkArray = (arr, size) => {
      const chunkedArr = [];
      for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
      }
      return chunkedArr;
    };
  
    const rowsOfProducts = chunkArray(products, 3);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div className='contentFullshop'>
        {/* {showAlert && (
                    <div className="alert">
                        <img src={showAlert} alt="Product added to cart" className="alert-image" />
                        <p>Added to cart</p>
                     </div>
            )} */}
        <div className='contentShop'>  
        <h1>ALL SNKRS</h1>
        {rowsOfProducts.map((row, index) => (
          <div className="row" key={index}>
            {row.map(product => (
           <div className={`card10 ${product.id === 18 ? 'special-product' : ''}`} key={product.id}>
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
            ))}
          </div>
        ))}
        </div>  
      </div>
    );
  };
  
  export default ShopContent;