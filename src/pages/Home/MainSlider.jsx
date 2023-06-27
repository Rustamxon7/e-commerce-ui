import React, { useEffect, useState } from 'react';

import Dots from '../../components/Dots';
import { new_items, list } from '../../data/main';
import MainSlide from '../../components/MainCard';
import MainNewItems from '../../components/MainNewItems';

import styles from './MainSlider.module.css';

const MainSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main_slider}>
      <div className={styles.container}>
        <div className={styles.top}>
          {new_items.map((item, index) => (
            <MainSlide
              hidden={{ opacity: 0, left: `${index - position}00%` }}
              visible={{ opacity: 1, left: `${index - position}00%` }}
              transition={{ duration: 0.5 }}
              name={item.name}
              img={item.img}
              price={item.price}
              styles={styles}
              index={index}
            />
          ))}

          <Dots position={position} setPosition={setPosition} styles={styles} />
        </div>

        <MainNewItems list={list} styles={styles} />
      </div>
    </div>
  );
};

export default MainSlider;
