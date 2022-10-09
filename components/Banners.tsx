import { Button } from 'evergreen-ui';
import Image from 'next/image';
import React from 'react';
import { Colors } from '../constant/styles';
import classes from './styles/banner.module.css';
const Banners = () => {
  return (
    <div className="container">
      <div className={classes['banners']}>
        <div className={classes['banner-image-box']}>
          <Image className={classes['banner-image']} src={require('../assets/model1.jpg')} alt="banner" />
          <div className={classes['banner-content']}>
            <h3>Women Collection</h3>
            <p>Spring 2022</p>
            <Button borderColor={Colors.pink4} background="none" color={Colors.pink4} marginTop="50px" fontSize="18px">
              Popular
            </Button>
          </div>
        </div>
        <div className={classes['banner-container']}>
          <div className={classes['banner-row']}>
            <div className={classes['banner-placeholder']}>
              <div className={classes['banner-content']}>
                <h3>Women Collection</h3>
                <p>Spring 2022</p>
                <Button borderColor={Colors.pink4} background="none" color={Colors.pink4}>
                  Popular
                </Button>
              </div>
            </div>
            <div className={classes['banner-image-box']}>
              <Image src={require('../assets/model2.jpg')} alt="banner" />
              <div className={classes['banner-content']}>
                <h3>Women Collection</h3>
                <p>Spring 2022</p>
                <Button borderColor={Colors.pink4} background="none" color={Colors.pink4}>
                  Popular
                </Button>
              </div>
            </div>
          </div>
          <div className={classes['banner-image-box']}>
            <Image src={require('../assets/model3.jpg')} alt="banner" />
            <div className={classes['banner-content']}>
              <h3>Women Collection</h3>
              <p>Spring 2022</p>
              <Button borderColor={Colors.pink4} background="none" color={Colors.pink4}>
                Popular
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
