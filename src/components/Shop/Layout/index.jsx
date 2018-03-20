import React from 'react';
import Services from '../Services';
import Cart from '../Cart';
import Container from '../../UI/Container';
import styles from './layout.module.less';

const Layout = () => (
  <Container>
    <div className={styles.grid}>
      <div><Services /></div>
      <div><Cart /></div>
    </div>
  </Container>
);

export default Layout;
