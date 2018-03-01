import React, { Component } from 'react';
import Portfolio from '../../Portfolio';
import Button from '../../UI/Button';
import styles from './portfolioSection.module.less';

class PortfolioSection extends Component {
  state = {
    items: [
      { id: 1, url: './images/1.jpg', text: 'Cool Feauture 1' },
      { id: 2, url: './images/2.jpg', text: 'Cool Feauture 2' },
      { id: 3, url: './images/3.jpg', text: 'Cool Feauture 3' },
      { id: 4, url: './images/4.jpg', text: 'Cool Feauture 4' },
      { id: 5, url: './images/5.jpg', text: 'Cool Feauture 5' },
      { id: 6, url: './images/6.jpg', text: 'Cool Feauture 6' },
      { id: 7, url: './images/7.jpg', text: 'Cool Feauture 7' },
      { id: 8, url: './images/8.jpg', text: 'Cool Feauture 8' },
      { id: 9, url: './images/9.jpg', text: 'Cool Feauture 9' }
    ]
  }

  render() {
    return (
      <section>
        <Portfolio items={this.state.items} />
        <div className={styles.buttonCase}>
          <Button btnType="accent">View Portfolio</Button>
        </div>
      </section>
    );
  }
}

export default PortfolioSection;
