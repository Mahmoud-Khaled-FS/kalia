import React from 'react';
import classes from '../styles/cart.module.css';
import Button from '../UI/Button';

const CartInfo = () => {
  return (
    <div className={classes['cart-info']}>
      <div className={classes['info-total']}>
        <p>Total:</p>
        <h4>LE 155,99</h4>
      </div>
      <div className={classes['info-btn']}>
        <Button marginTop="20px">Checkout</Button>
      </div>
    </div>
  );
};

export default CartInfo;
