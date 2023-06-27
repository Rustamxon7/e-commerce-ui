import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const MainNewItems = ({ list, styles }) => {
  const [listPosition, setListPosition] = useState(0);

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
  );
};

export default MainNewItems;
