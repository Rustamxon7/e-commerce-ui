import React, { useEffect, useState } from 'react';
import styles from './TopNavBar.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const navData = [
  {
    id: 1,
    name: 'Electronics',
    subCategories: [
      {
        id: 1,
        name: 'Mobiles',
      },
      {
        id: 2,
        name: 'Computers',
      },
      {
        id: 3,
        name: 'Cameras',
      },
      {
        id: 4,
        name: 'TVs',
      },
      {
        id: 5,
        name: 'Headphones',
      },
      {
        id: 6,
        name: 'Speakers',
      },
    ],
  },
  {
    id: 2,
    name: 'Home',
    subCategories: [
      {
        id: 1,
        name: 'Mobiles',
      },
      {
        id: 2,
        name: 'Computers',
      },
      {
        id: 3,
        name: 'Cameras',
      },
      {
        id: 4,
        name: 'TVs',
      },
    ],
  },
  {
    id: 3,
    name: 'Catalog',
    subCategories: [
      {
        id: 1,
        name: 'Mobiles',
      },
      {
        id: 2,
        name: 'Computers',
      },
      {
        id: 3,
        name: 'Cameras',
      },
      {
        id: 4,
        name: 'TVs',
      },
    ],
  },
  {
    id: 4,
    name: 'Blog',
    subCategories: [
      {
        id: 1,
        name: 'Mobiles',
      },
      {
        id: 2,
        name: 'Computers',
      },
      {
        id: 3,
        name: 'Cameras',
      },
      {
        id: 4,
        name: 'TVs',
      },
    ],
  },
  {
    id: 5,
    name: 'Pages',
    subCategories: [
      {
        id: 1,
        name: 'Mobiles',
      },
      {
        id: 2,
        name: 'Computers',
      },
      {
        id: 3,
        name: 'Cameras',
      },
      {
        id: 4,
        name: 'TVs',
      },
    ],
  },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

const TopNavBar = () => {
  const [active, setActive] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const displayactiveDropdown = () => {
      setActiveDropdown(navData.find((item) => item.id === active));
    };
    displayactiveDropdown();
  }, [active]);

  const backdrop = (
    <div className={styles.backdrop} onClick={() => setActive(null)}></div>
  );

  return (
    <div className={styles.to_nav_bar}>
      <nav className={styles.container}>
        {active && <AnimatePresence>{backdrop}</AnimatePresence>}

        <div className={styles.right}>
          <a href='#' className={styles.nav__link} onClick={() => setActive(1)}>
            <div className={styles.link__wrapper}>
              <span>Browse categories</span>
              <FiChevronDown className={styles.link__icon} />
            </div>
            {active === 1 && activeDropdown && (
              <motion.div
                className={styles.dropdown}
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
              >
                <div className={styles.dropdown__item}>
                  <h3>{activeDropdown.name}</h3>
                  <ul>
                    {activeDropdown.subCategories.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </a>
          <a href='#' className={styles.nav__link} onClick={() => setActive(2)}>
            <div className={styles.link__wrapper}>
              <span>Home</span>
              <FiChevronDown className={styles.link__icon} />
            </div>

            {active === 2 && activeDropdown && (
              <motion.div
                className={styles.dropdown}
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
              >
                <div className={styles.dropdown__item}>
                  <h3>{activeDropdown.name}</h3>
                  <ul>
                    {activeDropdown.subCategories.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </a>
          <a href='#' className={styles.nav__link} onClick={() => setActive(3)}>
            <div className={styles.link__wrapper}>
              <span>Catalog</span>
              <FiChevronDown className={styles.link__icon} />
            </div>

            {active === 3 && activeDropdown && (
              <motion.div
                className={styles.dropdown}
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
              >
                <div className={styles.dropdown__item}>
                  <h3>{activeDropdown.name}</h3>
                  <ul>
                    {activeDropdown.subCategories.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </a>
          <a href='#' className={styles.nav__link} onClick={() => setActive(4)}>
            <div className={styles.link__wrapper}>
              <span>Blog</span>
              <FiChevronDown className={styles.link__icon} />
            </div>

            {active === 4 && activeDropdown && (
              <motion.div
                className={styles.dropdown}
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
              >
                {' '}
                <div className={styles.dropdown__item}>
                  <h3>{activeDropdown.name}</h3>
                  <ul>
                    {activeDropdown.subCategories.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </a>
          <a href='#' className={styles.nav__link} onClick={() => setActive(5)}>
            <div className={styles.link__wrapper}>
              <span>Pages</span>
              <FiChevronDown className={styles.link__icon} />
            </div>

            {active === 5 && activeDropdown && (
              <motion.div
                className={styles.dropdown}
                variants={dropdownVariants}
                initial='hidden'
                animate='visible'
              >
                {' '}
                <div className={styles.dropdown__item}>
                  <h3>{activeDropdown.name}</h3>
                  <ul>
                    {activeDropdown.subCategories.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </a>
          <a href='#' className={styles.nav__link}>
            <span>About us</span>
          </a>
        </div>

        <a href='#' className={styles.link}>
          30 Days Return
        </a>
      </nav>
    </div>
  );
};

export default TopNavBar;
