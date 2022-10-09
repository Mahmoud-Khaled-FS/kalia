import React, { useState } from 'react';
import { Navigation } from '../../constant/info';
import classes from '../styles/header.module.css';
import Link from 'next/link';
import { AddOutline, RemoveOutline } from 'react-ionicons';
type Props = {
  item: Navigation;
};

const MobileNavigationItem: React.FC<Props> = (props) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  return (
    <li className={classes['menu-mobile-item']}>
      {!props.item.subMenu && (
        <Link href={props.item.url}>
          <a className={classes['menu-title']}>{props.item.title}</a>
        </Link>
      )}
      {props.item.subMenu && (
        <div>
          <button className={classes['submenu']} onClick={() => setOpenSubmenu((prev) => !prev)}>
            <span className={classes['menu-title']}>{props.item.title}</span>
            <div className={classes['btns-container']}>
              {!openSubmenu && (
                <div className={classes.open}>
                  <AddOutline />
                </div>
              )}
              {openSubmenu && (
                <div className={classes.close}>
                  <RemoveOutline />
                </div>
              )}
            </div>
          </button>
          <ul className={`${classes['submemu-list']} ${openSubmenu && classes['active']}`}>
            {props.item.subMenu.map((s) => (
              <li className={classes['submemu-item']} key={s.id}>
                <Link href={s.url}>
                  <a>{s.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MobileNavigationItem;
