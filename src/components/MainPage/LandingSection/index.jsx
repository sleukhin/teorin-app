import React from 'react';
import Container from '../../UI/Container';
import styles from './landingSection.module.less';

const LandingSection = props => (
  <section className={styles.landingSection}>
    <Container>
      <div className={styles.grid}>
        <div className={styles.sectionLeft}>
          <h2>
            Are You Ready?<br />Are You REALLY READY??
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quam
            non dignissimos eveniet, itaque quae, id magni nemo hic voluptas
            libero magnam autem ipsa saepe deserunt eos maxime unde voluptatem!
          </p>
          <p>
            Ullam eos illum, voluptate necessitatibus laudantium, enim rem sed
            magni facilis vel praesentium minus? Magnam excepturi distinctio atque
            sint nam facilis recusandae assumenda quibusdam a. Deleniti, obcaecati
            dolorum tenetur sunt.
          </p>
        </div>
        <div className={styles.sectionRight}>
          <img
            src="./images/example.jpg"
            alt="Example"
            className={styles.imgResponsive}
          />
        </div>
      </div>
    </Container>
  </section>
);

export default LandingSection;
