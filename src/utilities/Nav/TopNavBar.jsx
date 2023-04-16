import React from 'react';
import styles from './TopNavBar.module.css';
import { IoPersonOutline, IoCartOutline } from 'react-icons/io5';
const TopNavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.right}>
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
    </nav>
  );
};

export default TopNavBar;
