import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.header_box}>
        <h1 className={styles.header_title}>
          <a className={styles.header_itemLink} href="/">SPC</a>
        </h1>
        <ul className={styles.header_list}>
          <li className={styles.header_listItem}>
            <a className={styles.header_itemLink} href="/products">Products</a>
          </li>
          <li className={styles.header_listItem}>
            <a className={styles.header_itemLink} href="/about">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
