import React from 'react';
import Button from '../../UI/Button';
import Container from '../../UI/Container';

import styles from './form.module.less';

const FormSection = props => (
  <section className={styles.formSection}>
    <Container>
      <form className={styles.grid}>
        <div>
          <input type="text" name="name" placeholder="Your name*" required />
        </div>
        <div>
          <input type="text" name="name" placeholder="Your E-mail*" required />
        </div>
        <div>
          <input type="tel" name="tel" placeholder="Your Phone" />
        </div>
        <div>
          <Button type="primary" size="large" btnClass={styles.btn}>
            READY!
          </Button>
        </div>
      </form>
    </Container>
  </section>
);

export default FormSection;
