import React from 'react';
import styles from './button.module.less';

const Button = ({ onClick, type = 'default', size = 'default', btnClass, children, disabled }) => {
  const btnSize = size + 'Size';
  const cssClasses = [btnClass, styles[type], styles[btnSize]].join(' ');

  return (
    <button onClick={onClick} className={cssClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
