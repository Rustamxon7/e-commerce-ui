import React from 'react';
import { CiLocationOn, CiDeliveryTruck } from 'react-icons/ci';

import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.top_bar}>
      <div className={styles.container}>
        <div className={styles.left}>Need help? Call us at 1-800-123-4567</div>

        <div className={styles.right}>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <a href='#' className={styles.list__item__link}>
                <CiLocationOn className={styles.link__icon} />
                <span>Our stores</span>
              </a>
            </li>
            <li className={styles.list__item}>
              <a href='#' className={styles.list__item__link}>
                <CiDeliveryTruck className={styles.link__icon} />
                <span>Track your order</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
