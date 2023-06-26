import React from 'react';
import styles from './AddProductsSlider.module.css';
import sale from '../../assets/news/mac2.jpeg';
import { motion } from 'framer-motion';

const AddProductsSlider = () => {
  return (
    <div className={styles.add_products_slider}>
      <div className={styles.container}>
        <motion.img
          src={sale}
          alt=''
          initial={{
            scale: 1,
          }}
          animate={{
            scale: 1.1,
          }}

          // whileHover={{
          //   scale: 1.1,
          //   transition: { duration: 0.5 },
          // }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: 'reverse',
          }}
        />
        <div className={styles.flying_sale}>
          <button className={styles.btn}>New Laptop</button>
          <h1 className={styles.title}>Sale up to 50% off</h1>
          <p className={styles.size}>13 inch hd display</p>
          <button className={styles.btn + ' ' + styles.btn_last}>
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductsSlider;
