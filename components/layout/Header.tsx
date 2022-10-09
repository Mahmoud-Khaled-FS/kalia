import React from 'react';
import { navigation, Social } from '../../constant/info';
import DesktopNavigation from '../navigation/DesktopNavigation';
import MobileNavigation from '../navigation/MobileNavigation';
import classes from '../styles/header.module.css';
import { PersonOutline, BagOutline, SearchOutline, HeartOutline } from 'react-ionicons';
import Link from 'next/link';
const Header = () => {
  return (
    <header className={classes['header']}>
      <div className="container">
        <div className={classes['header-content']}>
          <ul className={classes['social-list']}>
            {Social.map((s) => (
              <li key={s.id}>
                <a href={s.url} className={classes['social-link']}>
                  <s.icon cssClasses={classes['social'] + ' ' + s.title} />
                </a>
              </li>
            ))}
          </ul>
          <div className={classes['logo']}>
            <Link href="/">
              <a className="playFont">Kalia</a>
            </Link>
          </div>
          <div className={classes['action']}>
            <button className={classes['mobile-action']}>
              <SearchOutline />
            </button>
            <button>
              <BagOutline />
            </button>
            <button>
              <HeartOutline />
            </button>
            <button>
              <PersonOutline />
            </button>
          </div>
        </div>
        <DesktopNavigation navigation={navigation} social={Social} />
        <MobileNavigation navigation={navigation} social={Social} />
      </div>
    </header>
  );
};
export default Header;
