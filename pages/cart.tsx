import React from 'react';
import CartHeader from '../components/cart/CartHeader';
import CartInfo from '../components/cart/CartInfo';
import CartProducts from '../components/cart/CartProducts';
import { Colors } from '../constant/styles';
import classes from '../components/styles/cart.module.css';
const Cart = () => {
  return (
    <div style={{ position: 'relative', background: Colors.gray1 }}>
      <div className="container">
        <div className={classes['cart-page']}>
          <div className={classes['cart-page-content'] + ' scrollable'}>
            <CartHeader />
            <CartProducts />
          </div>
          <CartInfo />
        </div>
      </div>
    </div>
  );
};

export default Cart;
