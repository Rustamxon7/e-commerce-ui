import React from 'react';
import styles from './Features.module.css';

import { HiCube } from 'react-icons/hi';
import { FaCrown } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';

import laptop from '../../assets/popularProducts/laptop.png';
import cam from '../../assets/popularProducts/laptop.png';
import phone from '../../assets/popularProducts/phone.png';

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.card}>
          <HiCube className={styles.deliver_icon} />
          <div className={styles.card_info}>
            <h1 className={styles.warranty}>Free delivery</h1>
            <p className={styles.describtion}>on order above $50.00</p>
          </div>
        </div>
        <div className={styles.card}>
          <FaCrown className={styles.deliver_icon} />

          <div className={styles.card_info}>
            <h1 className={styles.warranty}>Best quality</h1>
            <p className={styles.describtion}>best quality in low price</p>
          </div>
        </div>
        <div className={styles.card}>
          <BsShieldLockFill className={styles.deliver_icon} />
          <div className={styles.card_info}>
            <h1 className={styles.warranty}>1 year warranty</h1>
            <p className={styles.describtion}>Avaliable warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
