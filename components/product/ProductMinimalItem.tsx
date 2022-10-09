import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from '../styles/product.module.css';
const loaderProp: ImageLoader = ({ src }) => {
  return src;
};
const ProductMinimalItem = () => {
  return (
    <div className={classes['minimal-item']}>
      <Link href="/">
        <a className={classes['minimal-image']}>
          <Image
            height="100%"
            width="100%"
            loader={loaderProp}
            src={'https://placehold.jp/9dcdb7/ffffff/50x50.png'}
            alt="product"
          />
        </a>
      </Link>
      <div className={classes['minimal-content']}>
        <Link href="/">
          <h4>Relaxed Short Full Sleeve T-Shirt</h4>
        </Link>
        <Link href="/">
          <a className={classes['minimal-category']}>Clothes</a>
        </Link>
        <div className={classes['minimal-price-container']}>
          <p className={classes['minimal-price']}>LE 44.99</p>
          <del>LE 49.99</del>
        </div>
      </div>
    </div>
  );
};

export default ProductMinimalItem;
