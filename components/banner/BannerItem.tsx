import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from '../styles/slide.module.css';
const loaderProp: ImageLoader = ({ src }) => {
  return src;
};
const BannerItem = () => {
  return (
    <div className={classes['banner-item']}>
      <div className={classes['banner-image-contaiiner']}>
        <Image
          src={'https://placehold.jp/a8adf0/ffffff/1400x400.png'}
          loader={loaderProp}
          layout="fill"
          className={classes['banner-image']}
          alt="banner"
        />
      </div>
      <div className={classes['banner-content']}>
        <p className={classes['banner-item-subtitle']}>Trending Item</p>
        <h2 className={classes['banner-item-title']}>Women&lsquo;s latest fashion sale</h2>
        <p className={classes['banner-item-text']}>
          Starting at LE<b>20</b>.00
        </p>
        <Link href="/">
          <a className={classes['banner-link']}>Shop Now</a>
        </Link>
      </div>
    </div>
  );
};

export default BannerItem;
