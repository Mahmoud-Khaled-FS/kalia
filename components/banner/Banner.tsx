import React, { useEffect, useState } from 'react';
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons';
import { Colors } from '../../constant/styles';
import classes from '../styles/slide.module.css';
import BannerItem from './BannerItem';
const Banner = () => {
  const [showItem, setShowItem] = useState(0);
  const goNextHandler = () => {
    if (showItem >= 2) {
      return;
    }
    setShowItem((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showItem >= 2) {
        return setShowItem(0);
      }
      setShowItem((prev) => prev + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showItem]);

  const goBackHandler = () => {
    if (showItem <= 0) {
      return;
    }
    setShowItem((prev) => prev - 1);
  };
  return (
    <div className={classes['banner']}>
      <div className="container">
        <div className={classes['slider-box']}>
          <div
            style={{ transform: `translateX(-${showItem * 100}%)` }}
            className={classes['slider-container'] + ' scrollable'}
          >
            <BannerItem />
            <BannerItem />
            <BannerItem />
          </div>
          <div className={`${classes['slider-btn']} ${classes['slider-btn-left']}`}>
            <button onClick={goBackHandler}>
              <ChevronBackOutline width="30px" height="30px" color={Colors.gray4} />
            </button>
            <button onClick={goNextHandler}>
              <ChevronForwardOutline width="30px" height="30px" color={Colors.gray4} />
            </button>
          </div>
          <div className={classes['slider-paginatin']}>
            <span className={showItem === 0 ? classes.active : ''}></span>
            <span className={showItem === 1 ? classes.active : ''}></span>
            <span className={showItem === 2 ? classes.active : ''}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
