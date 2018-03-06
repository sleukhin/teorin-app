import React from 'react';
import styles from './container.module.less';

const Container = ({ children, className, type }) => {
  const cssClasses = [styles.container, styles[type], className].join(' ');

  return <div className={cssClasses}>{children}</div>;
};

export default Container;
