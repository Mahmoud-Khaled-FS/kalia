import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from '../styles/category.module.css';
const loaderProp: ImageLoader = ({ src }) => {
  return src;
};
const CategoryItem = () => {
  return (
    <div className={classes['category-item']}>
      <div className={classes['category-image-container']}>
        <Image
          width="30px"
          loader={loaderProp}
          height="30px"
          src={'https://placehold.jp/cd9dcb/ffffff/50x50.png'}
          alt="category"
        />
      </div>
      <div className={classes['category-content']}>
        <div className={classes['category-content-box']}>
          <h3>Dress & Frock</h3>
          <Link href="/">Show All</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
