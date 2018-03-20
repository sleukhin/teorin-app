import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../UI/Container';
import logo from '../../assets/images/logo.png';
import styles from './header.module.less';

const Header = props => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navLinks}>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              <li><NavLink to='/shop/services'>Our Services</NavLink></li>
              <li><NavLink to='/shop/cart'>Cart</NavLink></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
