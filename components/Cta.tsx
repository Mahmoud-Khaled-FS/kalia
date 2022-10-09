import { Button } from 'evergreen-ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './styles/banner.module.css';
const Cta = () => {
  return (
    <div className="container">
      <div className={classes['cta']}>
        <div className={classes['cta-banner']}>
          <Image src={require('../assets/cta.webp')} alt="cta" />
        </div>
        <div className={classes['cta-content']}>
          <p className={classes['cta-discount']}>25% collection</p>
          <h2 className={classes['cta-title']}>Summer collection</h2>
          <p className={classes['cta-text']}>Starting from LE25</p>
          <Button className={classes['cta-btn']}>Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
