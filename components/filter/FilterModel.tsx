import { Button, Checkbox } from 'evergreen-ui';
import React from 'react';
import { CloseOutline } from 'react-ionicons';
import classes from '../styles/filter.module.css';
type Props = {
  onClose: () => void;
};
const FilterModel: React.FC<Props> = (props) => {
  return (
    <div>
      <div onClick={props.onClose} className="close-overlay"></div>
      <div className={classes['model-filter']}>
        <div className={classes['model-header']}>
          <button onClick={props.onClose}>
            <CloseOutline width="30px" height="30px" />
          </button>
          <span>Filters</span>
        </div>
        <div className={classes['model-content']}>
          <div className={classes['model-content-box']}>
            <h4>Sizes</h4>
            <div className={classes['model-box-items']}>
              <Checkbox label="S" checked />
              <Checkbox label="M" />
              <Checkbox label="L" />
              <Checkbox label="XL" />
              <Checkbox label="XXL" />
            </div>
          </div>
          <div className={classes['model-content-box']}>
            <h4>Product Type</h4>
            <div className={classes['model-box-items']}>
              <Checkbox label="Blouse" checked />
              <Checkbox label="Cardigan" />
              <Checkbox label="Clothing" />
              <Checkbox label="Dresses" />
              <Checkbox label="Jacket" />
              <Checkbox label="Jeans" />
              <Checkbox label="Leggings" />
              <Checkbox label="Pants" />
              <Checkbox label="Pullover" />
              <Checkbox label="Scarf" />
              <Checkbox label="Shirt" />
              <Checkbox label="Shirt & Tops" />
              <Checkbox label="Sweatshirt" />
              <Checkbox label="T-Shirt" />
              <Checkbox label="Tops" />
              <Checkbox label="Vest" />
            </div>
          </div>
        </div>
        <div className={classes['model-submit']}>
          <Button
            marginTop="20px"
            width="100%"
            paddingY="23px"
            fontSize="18px"
            color="#fff"
            backgroundColor="#000"
            className="btn"
          >
            View Items
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterModel;
