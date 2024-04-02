import React, { useContext } from 'react';
import ShoppingCartContext from '../ShoppingCard';
import { ReactComponent as ShoppingBagIcon } from '../../styles/icons/shoppingBag.svg';
import './_shoppingbag.styles.scss';
import { Link } from 'react-router-dom';

const ShoppingBagButton = () => {
  const { cartItemCount } = useContext(ShoppingCartContext);

  return (
    <div className="shoppingbag">
    <Link to="/shoppingBag">
      <ShoppingBagIcon alt="Shopping Bag Icon" style={{ fill: 'white' }} />
      {cartItemCount > 0 && <span className="cart-counter">{cartItemCount}</span>}
    </Link>
    </div>
  );
};

export default ShoppingBagButton;