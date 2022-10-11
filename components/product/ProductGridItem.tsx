import Image, { ImageLoader } from 'next/image';
import React from 'react';
import classes from '../styles/product.module.css';
import { HeartOutline, BagAddOutline, Star, StarOutline } from 'react-ionicons';
import Link from 'next/link';
const loaderProp: ImageLoader = ({ src }) => {
  return src;
};
const ProductGridItem = () => {
  return (
    <div className={classes['product-grid-item']}>
      <div className={classes['grid-banner']}>
        <div className={classes['default'] + ' ' + classes['grid-image']}>
          <Image
            src={require('../../assets/51cb1f36-6006-4f1b-a55e-05a242261fc6.jpeg')}
            loader={loaderProp}
            width="100%"
            height="100%"
            className={classes['image-box']}
            alt="product"
            objectFit="contain"
          />
        </div>
        {/* <div className={classes['hover'] + ' ' + classes['grid-image']}>
          <Image
            width="100%"
            height="100%"
            className={classes['image-box']}
            loader={loaderProp}
            src={'https://placehold.jp/e297cb/ffffff/300x300.png'}
            alt="product"
            objectFit="contain"
          />
        </div> */}
        <span className={classes['grid-badge']}>15%</span>
        <div className={classes['product-action']}>
          <button className={classes['action-btn']}>
            <HeartOutline width="25px" height="25px" />
          </button>
          <button className={classes['action-btn']}>
            <BagAddOutline width="25px" height="25px" />
          </button>
        </div>
      </div>
      <div className={classes['grid-content']}>
        <Link href="/">
          <a className={classes['grid-link-category']}>T-shirt</a>
        </Link>
        <Link href="/">
          <h3 className={classes['grid-title']}>Maxi Floral Lace Bust Gown</h3>
        </Link>
        <div className={classes['grid-rating']}>
          <Star color={'#FFD700'} width="15px" height="15px" />
          <Star color={'#FFD700'} width="15px" height="15px" />
          <Star color={'#FFD700'} width="15px" height="15px" />
          <StarOutline color={'#FFD700'} width="15px" height="15px" />
          <StarOutline color={'#FFD700'} width="15px" height="15px" />
        </div>
        <div className={classes['grid-price-container']}>
          <p className={classes['grid-price']}>LE 44.99</p>
          <del>LE 49.99</del>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
