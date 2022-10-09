import { Button } from 'evergreen-ui';
import Image from 'next/image';
import React from 'react';
import classes from '../styles/productDetails.module.css';
const ProductDetails = () => {
  return (
    <div className={classes['product-page']}>
      <div className="container">
        <div className={classes['product-content']}>
          <div className={classes['image-container']}>
            <div className={classes['main-image']}>
              <Image src={require('../../assets/product (1).webp')} alt="product" />
            </div>
            <div className={classes['images-slider']}>
              <div className={`${classes['image']} ${classes['active']}`}>
                <Image src={require('../../assets/product (1).webp')} alt="product" />
              </div>
              <div className={classes['image']}>
                <Image src={require('../../assets/product (2).webp')} alt="product" />
              </div>
              <div className={classes['image']}>
                <Image src={require('../../assets/product (3).webp')} alt="product" />
              </div>
              <div className={classes['image']}>
                <Image src={require('../../assets/product (4).webp')} alt="product" />
              </div>
            </div>
          </div>
          <div className={classes['content']}>
            <div className={classes['content-header']}>
              <h2>Carina Women&lsquo;s Short Sleeve Sleep Set</h2>
              <span>LE 49.99</span>
              <del>LE 54.99</del>
            </div>
            <div className={classes['container']}>
              <p className={classes['head']}>Size</p>
              <div className={classes['boxes']}>
                <div className={classes['size-box']}>XXS</div>
                <div className={`${classes['size-box']} ${classes['active']}`}>XS</div>
                <div className={classes['size-box']}>S</div>
                <div className={classes['size-box']}>M</div>
                <div className={classes['size-box']}>L</div>
              </div>
            </div>
            <div className={classes['container']}>
              <p className={classes['head']}>Colors</p>
              <div className={classes['boxes']}>
                <div className={classes['color']}>
                  <span style={{ backgroundColor: '#c1121f' }}></span>
                </div>
                <div className={`${classes['color']} ${classes['active']}`}>
                  <span style={{ backgroundColor: '#fdf0d5' }}></span>
                </div>
                <div className={classes['color']}>
                  <span style={{ backgroundColor: '#003049' }}></span>
                </div>
                <div className={classes['color']}>
                  <span style={{ backgroundColor: '#669bbc' }}></span>
                </div>
              </div>
            </div>
            <div className={classes['container']}>
              <p className={classes['head']}>Detalis</p>
              <ul className={classes['details']}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates ratione voluptas,.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className={classes['colors']}>
              <Button
                marginTop="40px"
                width="100%"
                paddingY="23px"
                fontSize="18px"
                color="#fff"
                backgroundColor="#000"
                className="btn"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
