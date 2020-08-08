/* globals window */
import React from 'react';
import styles from '../styles/MainSection.module.css';

const MainSection = () => {
  function onClick() {
    window.location.href = '/products';
  }

  return (
    <section>
      <div className={styles.mainPage_topSection}>
        <div className="container">
          <div className={styles.topSection_box}>
            <div className={styles.topSectionLeft}>
              <div className={styles.topSectionLeft_box}>
                <p className={styles.topSectionLeft_textSmall}>Small text here</p>
                <h2 className={styles.topSectionLeft_header}>A heading wall here</h2>
                <p className={styles.topSectionLeft_text}>
                  A bunch of text here, I have no idea what its going to be.
                  So lets have it.
                </p>
                <button type="button" className={styles.topSectionLeft_button} onClick={onClick}>Products</button>
              </div>
            </div>
            <div className={styles.topSectionRight}>
              <img src="/images/learning.png" alt="People using Interactive displays" className={styles.topSectionRight_image} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainPage_middleSection}>
        <div className="container">
          <div className={styles.middleSection_box}>
            <div className={styles.middleSectionLeft}>
              <img src="/images/display.png" alt="An Interactive dispay" className={styles.middleSectionLeft_image} />
            </div>
            <div className={styles.middleSectionRight}>
              <div className={styles.middleSectionRight_box}>
                <h2 className={styles.middleSectionRight_header}>A heading wall here</h2>
                <p className={styles.middleSectionRight_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button type="button" className={styles.middleSectionRight_button} onClick={onClick}>Products</button>
              </div>
            </div>
          </div>
          <div className={styles.middleSection_box2}>
            <div className={styles.middleSectionLeft2}>
              <div className={styles.middleSectionLeft2_box}>
                <h2 className={styles.middleSectionLeft2_header}>A heading wall here</h2>
                <p className={styles.middleSectionLeft2_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className={styles.middleSectionRight2}>
              <img src="/images/learning2.png" alt="People learning" className={styles.middleSectionRight2_image} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainPage_bottomSection}>
        <div className="container">
          <div className={styles.bottomSection_box}>
            <div className={styles.bottomSectionLeft}>
              <div className={styles.bottomSectionLeft_box}>
                <h2 className={styles.bottomSectionLeft_header}>A heading wall here</h2>
                <p className={styles.bottomSectionLeft_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button type="button" className={styles.bottomSectionLeft_button} onClick={onClick}>Products</button>
              </div>
            </div>
            <div className={styles.bottomSectionRight}>
              <img src="/images/team.jpg" alt="People learning" className={styles.bottomSectionRight_image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
