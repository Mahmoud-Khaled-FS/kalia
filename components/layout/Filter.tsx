import React, { useState } from 'react';
import { GridSharp, List, OptionsOutline } from 'react-ionicons';
import FilterModel from '../filter/FilterModel';
import FilterSidebar from '../filter/FilterSidebar';
import ProductGrid from '../product/ProductGrid';
import classes from '../styles/filter.module.css';
const Filter = () => {
  const [openFilterModel, setOpenFilterModel] = useState(false);
  return (
    <div className={classes['page-filter']}>
      <FilterSidebar />
      <div style={{ flex: 1 }}>
        <div className={classes['filter-header']}>
          <button onClick={() => setOpenFilterModel(true)} className={`${classes['grid-type']} ${classes['f-btn']}`}>
            <OptionsOutline /> <span className={classes['filter-button']}>Filters</span>
          </button>
          <div className={classes['grid-type']}>
            <button>
              <GridSharp />
            </button>
            <button>
              <List />
            </button>
          </div>
        </div>
        <ProductGrid />
      </div>
      {openFilterModel && <FilterModel onClose={() => setOpenFilterModel(false)} />}
    </div>
  );
};

export default Filter;
