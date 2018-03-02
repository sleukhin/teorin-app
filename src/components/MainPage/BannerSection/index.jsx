import React from 'react';
import Button from '../../UI/Button';
import styles from './bannerSection.module.less';

const inlineStyle = {
  backgroundImage: 'url("./images/0-banner.jpg")'
};

const BannerSection = props => (
  <section style={inlineStyle} className={styles.mainHeader}>
    <div className={styles.headerContent}>
      <h1>We Are
        <span className={styles.companyName}>
          <span className={styles.accent}> [</span>
          Teorin Core<span className={styles.accent}>]</span>
        </span>
      </h1>
      <Button btnType="accent" btnClass={styles.btn}>Explore</Button>
      <Button btnType="default" btnClass={styles.btn}>View Projects</Button>
    </div>
  </section>
);

export default BannerSection;
