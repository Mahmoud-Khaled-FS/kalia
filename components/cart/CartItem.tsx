import Image, { ImageLoader } from 'next/image';
import React from 'react';
import { AddCircleOutline, CloseOutline, RemoveCircleOutline } from 'react-ionicons';
import { Colors } from '../../constant/styles';
import classes from '../styles/cart.module.css';
const loaderProp: ImageLoader = ({ src }) => {
  return src;
};
const CartItem = () => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <Image src={'https://placehold.jp/150x150.png'} loader={loaderProp} width="100%" height="100%" alt="product" />
      </div>
      <div className={classes['cart-item-content']}>
        <div className={classes['cart-item-header']}>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>
            <CloseOutline />
          </button>
        </div>
        <div className={classes['cart-item-info']}>
          <h4>
            <span>Color</span> <span style={{ background: '#415614' }} className={classes['color']} />
          </h4>
          <h4>
            <span>Size</span> <span className={classes['size']}>35</span>
          </h4>
        </div>
        <div className={classes['cart-item-info']}>
          <h4>
            <span>Quantity</span>
          </h4>
          <div className={classes['quantity-controller']}>
            <button>
              <RemoveCircleOutline width="25px" height="25px" color={Colors.gray5} />
            </button>
            <span className={classes['size']}>1</span>
            <button>
              <AddCircleOutline width="25px" height="25px" color={Colors.gray5} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
