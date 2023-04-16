import React from 'react';
import styles from './TopNavBar.module.css';
import { FiChevronDown } from 'react-icons/fi';

const TopNavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.right}>
        <a href='#' className={styles.nav__link}>
          <span>Browse categories</span>
          <FiChevronDown className={styles.link__icon} />
        </a>
        <a href='#' className={styles.nav__link}>
          <span>Home</span>
          <FiChevronDown className={styles.link__icon} />
        </a>
        <a href='#' className={styles.nav__link}>
          <span>Catalog</span>
          <FiChevronDown className={styles.link__icon} />
        </a>
        <a href='#' className={styles.nav__link}>
          <span>Blog</span>
          <FiChevronDown className={styles.link__icon} />
        </a>
        <a href='#' className={styles.nav__link}>
          <span>Pages</span>
          <FiChevronDown className={styles.link__icon} />
        </a>
        <a href='#' className={styles.nav__link}>
          <span>About us</span>
        </a>
      </div>

      <a href='#' className={styles.link}>
        30 Days Return
      </a>
    </nav>
  );
};

export default TopNavBar;
