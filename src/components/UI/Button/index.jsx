import React from 'react';
import styles from './button.module.less';

const Button = ({ onClick, btnType, btnClass, children, disabled }) => {
  const cssClasses = [btnClass, styles[btnType]].join(' ');

  return (
    <button onClick={onClick} className={cssClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
