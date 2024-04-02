import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartContext from '../atoms/ShoppingCard';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import './_shoppingCard.styles.scss';
import Button from '../atoms/Buttons/Button';
import { faTrash, } from '@fortawesome/free-solid-svg-icons';

const ShoppingBagPage = () => {
  const { cartItems, resetCart, removeFromCart } = useContext(ShoppingCartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  
  const handleCheckout = () => {
    resetCart();
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div>
      <div className="Header">
        <Header />
      </div>      
      <div className='contentBag'>
        <h1>Your Shopping Bag</h1>
        {cartItems.length === 0 ? (
          <p>Shopping bag is empty</p>
          ) : (
            <div>
              {cartItems.map(item => (
                <div className='contentTrash'>
                <div className='bagItem' key={item.id}>
                  <h2>{item.name}</h2>
                  <img src={item.imgSrc} alt={item.name} />
                  <p>Size: {item.size} </p>
                  <p>Price: €{item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: €{item.price * item.quantity}</p>
                </div>
                  <div className='trashCan'>
                   <Button variant={'trash'} icon={ faTrash } onClick={() => handleRemoveItem(item.id)} />
                  </div>
                </div>
              ))}
            </div>
          )}
        <p>Total Price: €{totalPrice}</p> 
        <Link to='/shop' className='button-Shophere'>
          {cartItems.length === 0 && <Button variant={'secondary'} label={'Shop here'} />} 
        </Link>
        <Link to='/thanks'className='button-CheckOut'>
        {cartItems.length >= 1 && <Button variant={'white'} label={'Check out'} onClick={handleCheckout} />}
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingBagPage;