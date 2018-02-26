import React from 'react';
import styles from './footer.module.less';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logo}>
        We Are Real <span>Creators</span>
      </div>
      <div className={styles.copyright}>~©~</div>
    </div>
  </footer>
);

export default Footer;
