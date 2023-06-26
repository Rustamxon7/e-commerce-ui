import React from 'react';
import styles from './TopSearchBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoPersonOutline, IoCartOutline } from 'react-icons/io5';
const TopSearchBar = () => {
  return (
    <div className={styles.top_search_bar}>
      <div className={styles.container}>
        <div className={styles.right}>
          <AiOutlineMenu className={styles.menu} />
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
