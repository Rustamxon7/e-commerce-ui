import React, { useState } from 'react';
import styles from './Testimonials.module.css';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Dots from '../../components/Dots';

import { list } from '../../data/testimonials';

const Testimonials = () => {
  const [listPosition, setListPosition] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 34em)' });
  const isTablet = useMediaQuery({
    query: '(max-width: 59em) and (min-width: 34em)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 75em)' });

  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.testimonials_section}>
          {isDesktop &&
            list.map((i, index) => (
              <motion.div
                className={styles.card}
                animate={{
                  opacity: 1,
                  left: `${(index - listPosition) * 34}%`,
                }}
                transition={{ duration: 0.5 }}
                key={index}
              >
                <span className={styles.main}>
                  <img className={styles.people} src={i.img} alt='' />
                  <h1 className={styles.title}>{i.name}</h1>
                </span>
                <p className={styles.info}>{i.information}</p>
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
                <span className={styles.main}>
                  <img className={styles.people} src={i.img} alt='' />
                  <h1 className={styles.title}>{i.name}</h1>
                </span>
                <p className={styles.info}>{i.information}</p>
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
                <span className={styles.main}>
                  <img className={styles.people} src={i.img} alt='' />
                  <h1 className={styles.title}>{i.name}</h1>
                </span>
                <p className={styles.info}>{i.information}</p>
              </motion.div>
            ))}
        </div>

        <Dots
          position={listPosition}
          setPosition={setListPosition}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default Testimonials;
