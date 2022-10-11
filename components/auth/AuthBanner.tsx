import Image from 'next/image';
import React from 'react';
import classes from '../styles/auth.module.css';
const AuthBanner = () => {
  return (
    <div className={classes['banner']}>
      <div className={classes['banner-image']}>
        <Image src={require('../../assets/auth-background.jpg')} alt="banner" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default AuthBanner;
