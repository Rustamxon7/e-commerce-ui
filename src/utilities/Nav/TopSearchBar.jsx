import React, { useState } from 'react';
import styles from './TopSearchBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { GrFormClose } from 'react-icons/gr';
import { BsChevronDown } from 'react-icons/bs';
import { motion } from 'framer-motion';

const TopSearchBar = () => {
  const list = [
    {
      id: 1,
      name: 'Electronics',
    },
    {
      id: 2,
      name: 'Home',
    },
    {
      id: 3,
      name: 'Fashion',
    },
    {
      id: 4,
      name: 'Health & Beauty',
    },
    {
      id: 5,
      name: 'Toys',
    },
    {
      id: 6,
      name: 'Grocery',
    },
  ];

  const [show, setShow] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className={styles.top_search_bar}>
      {displayMenu && (
        <motion.div
          className={styles.mobile_menu}
          initial={{ opacity: 0, transform: 'translateX(-100%)' }}
          animate={{ opacity: 1, transform: 'translateX(0%)' }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.exit}>
            <GrFormClose
              className={styles.exit_icon}
              onClick={() => setDisplayMenu(!displayMenu)}
            />

            <div className={styles.login}>
              <span>login</span> / <span>register</span>
            </div>
          </div>

          <div className={styles.categories}>
            <div
              className={styles.categories_title}
              onClick={() => setShow(!show)}
            >
              Categories
              <BsChevronDown className={styles.categories_icon} />
            </div>

            {show &&
              list.map((item) => (
                <motion.div
                  className={styles.categories_title}
                  // onClick={() => setShow(!show)}
                  initial={{ opacity: 0, transform: 'translateY(-10%)' }}
                  animate={{ opacity: 1, transform: 'translateY(0%)' }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                  <BsChevronDown className={styles.categories_icon} />
                </motion.div>
              ))}
          </div>

          <div className={styles.nav_links}>
            <a href='#' className={styles.nav_link}>
              Home
            </a>
            <a href='#' className={styles.nav_link}>
              About
            </a>
            <a href='#' className={styles.nav_link}>
              Contact
            </a>
            <a href='#' className={styles.nav_link}>
              Cart
            </a>
          </div>
        </motion.div>
      )}

      <div className={styles.container}>
        <div className={styles.right}>
          <AiOutlineMenu
            className={styles.menu}
            onClick={() => setDisplayMenu(!displayMenu)}
          />
          <div className={styles.logo}>Logo</div>
          <div className={styles.search}>
            <input type='text' placeholder='Search any thing' />
            <button>Search</button>
          </div>
        </div>

        <div className={styles.links}>
          <a href='#'>
            <IoPersonOutline />
            <span>Sign in</span>
          </a>
          <a href='#'>
            <IoCartOutline />
            <span>Cart</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopSearchBar;
