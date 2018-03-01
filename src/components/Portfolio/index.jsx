import React from 'react';
import styles from './portfolio.module.less';

const Portfolio = ({ items }) => (
  <div className={styles.portfolio}>
    {items.map(item => (
      <div
        key={item.id}
        style={{ backgroundImage: `url(${item.url})` }}
        className={styles.portfolioItem}
      >
        <span>{item.text}</span>
      </div>
    ))}
  </div>
);

export default Portfolio;
