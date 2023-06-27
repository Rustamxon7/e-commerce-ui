import React from 'react';
import { motion } from 'framer-motion';

const MainSlide = ({
  hidden,
  visible,
  transition,
  name,
  img,
  price,
  styles,
  index,
}) => {
  return (
    <motion.div
      className={styles.main_new_items}
      initial={hidden}
      animate={visible}
      transition={transition}
      key={index}
    >
      <div className={styles.button}>
        <h1 className={styles.big_title}>{name}</h1>
        <div className={styles.title_btns}>
          <div className={styles.btns}>
            <button className={styles.orange_btn}>Shop now</button>
            <button className={styles.white_btn}>View more</button>
          </div>
        </div>
      </div>
      <div className={styles.main_img}>
        <img src={img} alt='Cam' />
        <span className={styles.alert}>
          only <br />
          <span className={styles.price}>${price}</span>
        </span>
      </div>
    </motion.div>
  );
};

export default MainSlide;
