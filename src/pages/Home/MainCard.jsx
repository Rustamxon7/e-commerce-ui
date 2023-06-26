import React from 'react';
import styles from './MainSlider.module.css';

const MainCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.srcImg} alt='' />
      <div className={styles.card_title}>
        <h1 className={styles.canon}>{props.name}</h1>
        <p className={styles.number}>({props.count} items)</p>
      </div>
    </div>
  );
};

export default MainCard;
