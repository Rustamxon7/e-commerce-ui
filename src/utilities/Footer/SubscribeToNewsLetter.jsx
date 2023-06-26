import React from 'react';
import styles from './SubscribeToNewsLetter.module.css';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
const SubscribeToNewsLetter = () => {
  return (
    <div className={styles.SubscribeToNewsLetter}>
      <h1 className={styles.title}>Subscribe newsletter</h1>
      <div className={styles.input}>
        <input
          type='text'
          className={styles.email_address}
          placeholder='Email Address'
        />
        <button className={styles.btn}>Subscribe</button>
      </div>
      <span className={styles.call}>
        <TfiHeadphoneAlt fontSize={40} color='#EDA415' />
        <span>
          <p>
            Call us 24/7 <br /> (+62) 0123 567 789
          </p>
        </span>
      </span>
    </div>
  );
};

export default SubscribeToNewsLetter;
