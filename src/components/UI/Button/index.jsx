import React from 'react';
import styles from './button.module.less';

const Button = ({onClick, btnType, btnClass, children}) => {
  const cssClasses = [btnClass, styles[btnType]].join(' ');

  return (
    <button onClick={onClick} className={cssClasses}>{children}</button>
  );
};

export default Button;
