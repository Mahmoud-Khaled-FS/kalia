import React, { useState } from 'react';
import { Navigation } from '../../constant/info';
import classes from '../styles/header.module.css';
import { MenuOutline, BagOutline, HomeOutline, HeartOutline, PersonOutline, CloseOutline } from 'react-ionicons';
import { Colors } from '../../constant/styles';
import MobileNavigationItem from './MobileNavigationItem';

type Props = {
  navigation: Navigation[];
  social: Navigation[];
};

const MobileNavigation: React.FC<Props> = (props) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className={classes['mobile-navigation']}>
        <button className={classes['mobile-btn']} onClick={() => setOpenNav((prev) => !prev)}>
          <MenuOutline color={Colors.gray5} width="25px" height="25px" />
        </button>
        <button className={classes['mobile-btn']}>
          <BagOutline color={Colors.gray5} width="25px" height="25px" />
          <span className={classes['count']}>0</span>
        </button>
        <button className={classes['mobile-btn']}>
          <HomeOutline color={Colors.gray5} width="25px" height="25px" />
        </button>
        <button className={classes['mobile-btn']}>
          <HeartOutline color={Colors.gray5} width="25px" height="25px" />
          <span className={classes['count']}>0</span>
        </button>
        <button className={classes['mobile-btn']}>
          <PersonOutline color={Colors.gray5} width="25px" height="25px" />
        </button>
      </div>
      <nav className={`${classes['mobile-nav']} ${openNav && classes['active']} scrollable`}>
        <div className={classes['mobile-header']}>
          <h2 className="playFont">Menu</h2>
          <button onClick={() => setOpenNav(false)}>
            <CloseOutline width="27px" height="27px" />
          </button>
        </div>
        <ul className={classes['meun-mobile-list']}>
          {props.navigation.map((n) => (
            <MobileNavigationItem item={n} key={n.id} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;
