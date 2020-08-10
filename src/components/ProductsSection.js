import React from 'react';
import styles from '../styles/ProductsSection.module.css';
import siteConfig from '../config';

const ProductsSection = () => (
  <div className="container">
    <section className={styles.products}>
      <h2 className={styles.products_title}>Introducing the W series !</h2>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Display
        </div>
        <div className={styles.products_specDescription}>
          75-inch (diagonal) LED-backlit display
          <br />
          3840‑by‑2160 resolution with support for one billion colors
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Processor
        </div>
        <div className={styles.products_specDescription}>
          1.5GHz quad‑core
          ARM MSD8386
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Memory
        </div>
        <div className={styles.products_specDescription}>
          3GB of DDR4 memory
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Storage
        </div>
        <div className={styles.products_specDescription}>
          16GB
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Video Support and Camera
        </div>
        <div className={styles.products_specDescription}>
          Supports full native resolution on the built-in display at 1 billion colors.
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Audio
        </div>
        <div className={styles.products_specDescription}>
          Stereo speakers
          <br />
          Microphone
          <br />
          3.5 mm headphone jack
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Input
        </div>
        <div className={styles.products_specDescription}>
          Touchscreen with 20-point touch
          <br />
          Keyboard
          <br />
          Mouse
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Wireless
        </div>
        <div className={styles.products_specDescription}>
          Wi-Fi
          <br />
          Bluetooth
          <br />
          Mouse
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Operating requirements
        </div>
        <div className={styles.products_specDescription}>
          Line voltage: 100–240V AC
          <br />
          Frequency: 50Hz to 60Hz, single phase
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          In the Box
        </div>
        <div className={styles.products_specDescription}>
          SPC W Series Display
          <br />
          Remote Control
          <br />
          Power cord
          <br />
          2 Touch pens
          <br />
          Wall Mount
          <br />
          Instructon Manual
        </div>
      </div>
      <hr className={styles.products_line} />
      <div className={styles.products_row}>
        <div className={styles.products_specName}>
          Operating System
        </div>
        <div className={styles.products_specDescription}>
          Android 8
        </div>
      </div>
      <hr className={styles.products_line} />
      <div>
        <p className={styles.products_endText}>Would you like to know more?</p>
        <a type="button" className={styles.products_button} href={`mailto:${siteConfig.email}`}>Send us an email</a>
      </div>
    </section>
  </div>
);

export default ProductsSection;
