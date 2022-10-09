import React from 'react';
import classes from '../styles/category.module.css';
import CategoryItem from './CategoryItem';
const Category = () => {
  return (
    <div className={classes['category']}>
      <div className="container">
        <div className={classes['category-container'] + ' scrollable'}>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </div>
  );
};

export default Category;
