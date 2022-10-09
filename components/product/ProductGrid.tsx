import React from 'react';
import classes from '../styles/product.module.css';
import ProductGridItem from './ProductGridItem';
const ProductGrid = () => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h2 className="title">New Products</h2>
      <div className={classes['product-grid']}>
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
      </div>
    </div>
  );
};

export default ProductGrid;
