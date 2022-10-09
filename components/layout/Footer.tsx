import React from 'react';
import { LogoFacebook, LogoInstagram, LogoTwitter } from 'react-ionicons';
import classes from '../styles/footer.module.css';
const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer-container']}>
        <div className="container">
          <div className={classes['footer-top']}>
            <div className={classes['footer-category']}>
              <h3>Kalia</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magni voluptas laboriosam ratione. Magni
                sequi esse delectus quod unde aut illo officia inventore? Ratione sunt, sequi in optio repudiandae illo!
              </p>
            </div>
            <div className={classes['footer-category']}>
              <h3>Hot links</h3>
              <ul>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">conatcts</a>
                </li>
              </ul>
            </div>
            <div className={classes['footer-category']}>
              <h3>more info</h3>
              <ul>
                <li>
                  <a href="#">how it works</a>
                </li>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">decline rules</a>
                </li>
                <li>
                  <a href="#">terms & conditions</a>
                </li>
              </ul>
            </div>
            <div className={classes['footer-category']}>
              <h3>customer care</h3>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">terms of use</a>
                </li>
                <li>
                  <a href="#">privace policy</a>
                </li>
                <li>
                  <a href="#">discount system</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes['footer-bottom']}>
            <p>&copy; Copyright Kalia shop all riights recrved</p>
            <div className={classes['social-link']}>
              <LogoFacebook cssClasses={classes['social'] + ' facebook'} />
              <LogoTwitter cssClasses={classes['social'] + ' twitter'} />
              <LogoInstagram cssClasses={classes['social'] + ' instegram'} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
