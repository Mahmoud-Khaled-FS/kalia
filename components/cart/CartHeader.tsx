import React from 'react';
import classes from '../styles/cart.module.css';
const CartHeader = () => {
  return (
    <div className={classes.header}>
      <h3 className={classes['header-cart-title']}>Bag</h3>
    </div>
  );
};

export default CartHeader;
