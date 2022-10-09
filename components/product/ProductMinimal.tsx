import React from 'react';
import classes from '../styles/product.module.css';
import ProductMinimalItem from './ProductMinimalItem';

type Props = {
  title: string;
};

const ProductMinimal: React.FC<Props> = (props) => {
  return (
    <div className={classes['product-minimal-main']}>
      <h3 className="title">{props.title}</h3>
      <div className={classes['product-minimal-list'] + ' scrollable'}>
        <div className={classes['product-minimal-container']}>
          <ProductMinimalItem />
          <ProductMinimalItem />
          <ProductMinimalItem />
          <ProductMinimalItem />
        </div>
        <div className={classes['product-minimal-container']}>
          <ProductMinimalItem />
          <ProductMinimalItem />
          <ProductMinimalItem />
          <ProductMinimalItem />
        </div>
      </div>
    </div>
  );
};

export default ProductMinimal;
