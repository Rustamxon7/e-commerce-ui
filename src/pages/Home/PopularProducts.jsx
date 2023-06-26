import React, { useEffect, useState } from 'react';
import styles from './PopularProducts.module.css';
import { FaStar } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';

import { list } from '../../data/popularProducts.js';

import { motion } from 'framer-motion';

const list_item_variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },

  hover: {
    border: '1px solid #000',
    transition: {
      duration: 0.5,
    },
  },
};

const PopularProducts = () => {
  return (
    <div className={styles.popular_products}>
      <div className={styles.container}>
        <div className={styles.names}>
          <h1 className={styles.top_title}>Popular Products</h1>
          <ul className={styles.products}>
            <li>
              <button className={styles.btns + ' ' + styles.active_btn}>
                LapTops
              </button>
            </li>
            <li>
              <button className={styles.btns}>Cameras</button>
            </li>
            <li>
              <button className={styles.btns}>Tablets</button>
            </li>
            <li>
              <button className={styles.btns}>Mouses</button>
            </li>
          </ul>
        </div>

        <div className={styles.list_items}>
          {list.map((el) => (
            <motion.div
              className={styles.list_item}
              key={el.id}
              initial='hidden'
              animate='visible'
              whileHover='hover'
              variants={list_item_variants}
            >
              <motion.img
                src={el.img}
                alt=''
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className={styles.info}>
                <h1 className={styles.title}>{el.name}</h1>
                <p className={styles.price}>${el.price}</p>
                <div className={styles.star_icons}>
                  <FaStar color='#ced4da' />
                  <FaStar color='#ced4da' />
                  <FaStar color='#ced4da' />
                  <FaStar color='#ced4da' />
                  <FaStar color='#ced4da' />
                </div>
              </div>
              <div className={styles.flying_icon}>
                <IoIosHeartEmpty />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
