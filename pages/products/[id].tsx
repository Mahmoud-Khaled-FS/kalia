import React from 'react';
import ProductDetails from '../../components/product/ProductDetails';
import ProductGrid from '../../components/product/ProductGrid';

const Product = () => {
  return (
    <div>
      <ProductDetails />;
      <div className="container">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Product;
