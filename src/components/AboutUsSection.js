import React from 'react';
import styles from '../styles/AboutUsSection.module.css';
import siteConfig from '../config';

const AboutUsSection = () => (
  <>
    <div className={styles.aboutSection_top} />
    <div className="container">
      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSection_title}>&apos;Seeing&apos; is believing</h2>
        <p className={styles.aboutSection_text}>
          Technology keeps changing so fast that it’s difficult to keep
          track of it all. At SPC, we want to make sure that the latest
          technology is made available to everyone. We promise to deliver
          products that are tailor-made to the needs of every customer.
        </p>
        <p className={styles.aboutSection_text}>
          Our mission is to remove the distance between people,
          be it a different continent or just the other part of town.
        </p>
        <p className={styles.aboutSection_text}>
          We provide Interactive displays that can be utilised by the
          education system, the business room, the corporate office and/or
          at your home. SPC is all about simplicity, our user-friendly
          displays will ensure that you can use it however you want to.
        </p>
        <a type="button" className={styles.aboutSection_button} href={`mailto:${siteConfig.email}`}>Get in Touch</a>
      </section>
    </div>
  </>
);

export default AboutUsSection;
