import React from 'react';
import Button from '../UI/Button';
import styles from './form.module.less';

const Form = props => (
  <section className={styles.formSection}>
    <div className={styles.container}>
      <form>
        <div><input type="text" name="name" placeholder="Your name*" required /></div>
        <div><input type="text" name="name" placeholder="Your E-mail*" required /></div>
        <div><input type="tel" name="tel" placeholder="Your Phone" /></div>
        <div><Button btnType="accent" btnClass={styles.btn}>READY!</Button></div>
      </form>
    </div>
  </section>
);

export default Form;
