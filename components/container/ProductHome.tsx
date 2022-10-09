import React from 'react';
import ProductGrid from '../product/ProductGrid';
import ProductMinimal from '../product/ProductMinimal';
import classes from '../styles/product.module.css';
const ProductHome = () => {
  return (
    <div className={classes['product-home-container']}>
      <div className="container">
        <div className={classes['product-main']}>
          <ProductMinimal title="New Arrivals" />
          <ProductMinimal title="Trending" />
          <ProductMinimal title="Top Rated" />
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductHome;
