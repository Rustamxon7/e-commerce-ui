import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import { GoPrimitiveDot } from 'react-icons/go';
import t1 from '../../assets/testimonials/t1.jpeg';
import t2 from '../../assets/testimonials/t2.jpeg';
import t4 from '../../assets/testimonials/t4.jpeg';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Testimonials = () => {
  const list = [
    {
      img: t1,
      name: 'Savanna Nguyen',
      information:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum exercitationem consectetur. Molestias molestiae quaerat quod, non consequuntur repudiandae veniam quia,',
    },
    {
      img: t2,
      name: 'Savanna Nguyen',
      information:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum exercitationem consectetur. Molestias molestiae quaerat quod, non consequuntur repudiandae veniam quia,',
    },
    {
      img: t4,
      name: 'Savanna Nguyen',
      information:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum exercitationem consectetur. Molestias molestiae quaerat quod, non consequuntur repudiandae veniam quia,',
    },
    {
      img: t4,
      name: 'Savanna Nguyen',
      information:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum exercitationem consectetur. Molestias molestiae quaerat quod, non consequuntur repudiandae veniam quia,',
    },
    {
      img: t4,
      name: 'Savanna Nguyen',
      information:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum exercitationem consectetur. Molestias molestiae quaerat quod, non consequuntur repudiandae veniam quia,',
    },
  ];
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

        <div className={styles.dots}>
          {[0, 1, 2].map((i) => (
            <span
              className={listPosition === i ? styles.active_dot : styles.dot}
              onClick={() => setListPosition(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
