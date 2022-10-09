import React from 'react';
import Link from 'next/link';
import { Navigation } from '../../constant/info';
import classes from '../styles/header.module.css';

type Props = {
  navigation: Navigation[];
  social: Navigation[];
};

const DesktopNavigation: React.FC<Props> = (props) => {
  return (
    <nav className={classes['desktop-nav']}>
      <div className={classes['container']}>
        <ul className={classes['category-list']}>
          {props.navigation.map((n) => (
            <li key={n.id} className={classes['category-item']}>
              <Link href={n.url}>
                <a className={classes['category-title']}>{n.title}</a>
              </Link>
              {n.subMenu && (
                <ul className={classes['dropdown']}>
                  {n.subMenu.map((s) => (
                    <Link key={s.id} href={s.url}>
                      <a className={classes['dropdown-title']}>{s.title}</a>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
