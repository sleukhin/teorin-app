import React from 'react';
import styles from './container.module.less';

const Container = ({ children, className }) => {
  const cssClasses = [styles.container, className ].join(' ');

  return <div className={cssClasses}>{children}</div>;
};

export default Container;
