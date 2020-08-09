/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../styles/Footer.module.css';
import siteConfig from '../../config';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footerContent}>
        <div className={styles.footerContent_company}>
          <h2 className={styles.footerContent_companyName}>SPC</h2>
          <p className={styles.footerContent_companyDescription}>
            Interactive displays for your every need !
          </p>
          <p className={styles.footerContent_companyAddress}>
            <a className={styles.footerContent_link} href={`tel:${siteConfig.numberToCall}`}>
              {siteConfig.numberToDisplay}
            </a>
            <a
              className={styles.footerContent_link}
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div className={styles.footerContent_links}>
          <h3 className={styles.footerContent_linksTitle}>Links</h3>
          <a className={styles.footerContent_link} href="#">
            Blog
          </a>
          <a className={styles.footerContent_link} href="#">
            Privacy policy
          </a>
          <a className={styles.footerContent_link} href="#">
            Terms & Conditions
          </a>
        </div>
        <div className={styles.footerContent_socialMediaLinks}>
          <h3 className={styles.footerContent_socialMediaTitle}>
            Social Media
          </h3>
          <a className={styles.footerContent_socialMediaLink} href="#">
            Facebook
          </a>
          <a className={styles.footerContent_socialMediaLink} href="#">
            Instagram
          </a>
          <a className={styles.footerContent_socialMediaLink} href="#">
            Twitter
          </a>
          <a className={styles.footerContent_socialMediaLink} href="#">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>Copyright © 2020. SPC. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
