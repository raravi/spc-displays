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
                <h2 className={styles.topSectionLeft_header}>Teach better, not slower</h2>
                <p className={styles.topSectionLeft_text}>
                  As educators, we need visual aids to make learning
                  interactive and fun for the students. Interact with ideas, understand them better.
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
                <h2 className={styles.middleSectionRight_header}>
                  Learn faster,
                  <br />
                  not harder
                </h2>
                <p className={styles.middleSectionRight_text}>
                  Students are always running short of time. A ton of things
                  to understand, and they have to imagine how it all works.
                  Why not make it easier for them to learn new things?!
                </p>
                <button type="button" className={styles.middleSectionRight_button} onClick={onClick}>Products</button>
              </div>
            </div>
          </div>
          <div className={styles.middleSection_box2}>
            <div className={styles.middleSectionLeft2}>
              <div className={styles.middleSectionLeft2_box}>
                <h2 className={styles.middleSectionLeft2_header}>Visual learning is the key!</h2>
                <p className={styles.middleSectionLeft2_text}>
                  Research has proven that students remember information
                  better and can better recall it when it is represented
                  and learned both visually and verbally. It improves
                  retention, comprehension, and critical thinking.
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
                <h2 className={styles.bottomSectionLeft_header}>Work smarter, not longer</h2>
                <p className={styles.bottomSectionLeft_text}>
                  Collaborate with your team, think together with your clients.
                  It doesn&apos;t matter if they&apos;re halfway around the world.
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
