import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import MainCard from './MainCard';

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

import styles from './MainSlider.module.css';

import { new_items, list } from '../../data/main';

const MainSlider = () => {
  const [position, setPosition] = useState(0);
  const [listPosition, setListPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLeft = () => {
    setListPosition((prev) => (prev - 1) % 4);
  };

  const handleRight = () => {
    if (listPosition === 1) {
      setListPosition(0);
      return;
    }
    setListPosition((prev) => (prev + 1) % 4);
  };

  const isMobile = useMediaQuery({ query: '(max-width: 34em)' });
  const isTablet = useMediaQuery({
    query: '(max-width: 59em) and (min-width: 34em)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 75em)' });

  return (
    <div className={styles.main_slider}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.dots}>
            {[0, 1, 2].map((i) => (
              <span
                className={position === i ? styles.active_dot : styles.dot}
                onClick={() => setPosition(i)}
              />
            ))}
          </div>

          {new_items.map((item, index) => (
            <motion.div
              className={styles.main_new_items}
              initial={{ opacity: 0, left: `${index - position}00%` }}
              animate={{ opacity: 1, left: `${index - position}00%` }}
              transition={{ duration: 0.5 }}
              key={index}
            >
              <div className={styles.button}>
                <h1 className={styles.big_title}>{item.name}</h1>
                <div className={styles.title_btns}>
                  <div className={styles.btns}>
                    <button className={styles.orange_btn}>Shop now</button>
                    <button className={styles.white_btn}>View more</button>
                  </div>
                </div>
              </div>
              <div className={styles.main_img}>
                <img src={item.img} alt='Cam' />
                <span className={styles.alert}>
                  only <br />
                  <span className={styles.price}>${item.price}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.bottom}>
          <BsFillArrowLeftCircleFill
            className={styles.to_left}
            onClick={handleLeft}
          />

          <div className={styles.bottom_list}>
            {isDesktop &&
              list.map((i, index) => (
                <motion.div
                  className={styles.card}
                  animate={{
                    opacity: 1,
                    left: `${(index - listPosition) * 35}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  key={index}
                >
                  <img src={i.img} alt='' />
                  <div className={styles.card_title}>
                    <h1 className={styles.canon}>{i.name}</h1>
                    <p className={styles.number}>({i.count} items)</p>
                  </div>
                </motion.div>
              ))}

            {!isDesktop &&
              !isMobile &&
              list.map((i, index) => (
                <motion.div
                  className={styles.card}
                  animate={{
                    opacity: 1,
                    left: `${(index - listPosition) * 52}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  key={index}
                >
                  <img src={i.img} alt='' />
                  <div className={styles.card_title}>
                    <h1 className={styles.canon}>{i.name}</h1>
                    <p className={styles.number}>({i.count} items)</p>
                  </div>
                </motion.div>
              ))}

            {isMobile &&
              list.map((i, index) => (
                <motion.div
                  className={styles.card}
                  animate={{
                    opacity: 1,
                    left: `${(index - listPosition) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  key={index}
                >
                  <img src={i.img} alt='' />
                  <div className={styles.card_title}>
                    <h1 className={styles.canon}>{i.name}</h1>
                    <p className={styles.number}>({i.count} items)</p>
                  </div>
                </motion.div>
              ))}
          </div>
          <BsFillArrowRightCircleFill
            className={styles.to_right}
            onClick={handleRight}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
