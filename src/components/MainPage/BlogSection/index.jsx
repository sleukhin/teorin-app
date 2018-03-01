import React, { Component } from 'react';
import BlogItems from '../../../components/BlogItems';
import Container from '../../UI/Container';
import Button from '../../UI/Button';

import styles from './blogSection.module.less';

class BlogSection extends Component {
  state = {
    posts: [
      { id: 1, url: '/', imageUrl: '/images/1.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 2, url: '/', imageUrl: '/images/2.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 3, url: '/', imageUrl: '/images/3.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 4, url: '/', imageUrl: '/images/4.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 5, url: '/', imageUrl: '/images/5.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 6, url: '/', imageUrl: '/images/6.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <section className={styles.blogSection}>
        <Container>
          <h2>Ready To Read Our Blog?</h2>
          <BlogItems items={posts} />
        </Container>
        <div className={styles.buttonCase}>
          <Button btnType="accent">View Blog</Button>
        </div>
      </section>
    );
  }
}

export default BlogSection;
