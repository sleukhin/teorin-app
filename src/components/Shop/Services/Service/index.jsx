import React from 'react';
import Button from '../../../UI/Button';
import styles from './service.module.less';

const Service = ({ service, onClick }) => (
  <div className={styles.service}>
    <div className={styles.serviceContent}>
      <h3 className={styles.header}>{service.title}</h3>
      <p className={styles.description}>{service.desc}</p>
      <Button onClick={onClick} type="primary" btnClass={styles.btn}>
        Add to Cart
      </Button>
    </div>
  </div>
);

export default Service;
