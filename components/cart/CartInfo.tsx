import { Button } from 'evergreen-ui';
import React from 'react';
import classes from '../styles/cart.module.css';

const CartInfo = () => {
  return (
    <div className={classes['cart-info']}>
      <div className={classes['info-total']}>
        <p>Total:</p>
        <h4>LE 155,99</h4>
      </div>
      <div className={classes['info-btn']}>
        <Button
          marginTop="20px"
          width="100%"
          paddingY="23px"
          fontSize="18px"
          color="#fff"
          backgroundColor="#000"
          className="btn"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartInfo;
