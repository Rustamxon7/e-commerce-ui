import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { list, list_item_variants } from '../../data/popularProducts.js';
import { motion } from 'framer-motion';

import styles from './PopularProducts.module.css';

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
            {/* <li>
              <button className={styles.btns}>Mouses</button>
            </li> */}
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
                {/* <p className={styles.condition}>{el.condition}</p> */}
                <p className={styles.stars}>
                  {/* ({el.stars}) */}
                  {Array(el.stars)
                    .fill()
                    .map((_, index) => (
                      <FaStar key={index} color='#ffc107' />
                    ))}
                </p>
                <p className={styles.price}>
                  {el.prev_price ? (
                    <>
                      <span className={styles.prev_price}>
                        ${el.prev_price}
                      </span>
                      <span className={styles.new_price}>${el.price}</span>
                    </>
                  ) : (
                    <>
                      <span
                        className={styles.prev_price}
                        style={{ visibility: 'hidden' }}
                      >
                        ${el.prev_price}
                      </span>
                      <span className={styles.new_price}>${el.price}</span>
                    </>
                  )}
                </p>
              </div>
              {/* <div className={styles.flying_icon}>
                <IoIosHeartEmpty />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
