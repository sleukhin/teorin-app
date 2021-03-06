import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogItems from '../../../components/BlogItems';
import Container from '../../UI/Container';

import styles from './blogSection.module.less';
import linkStyles from '../../../shared/less/link.module.less';

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
    const linkClasses = [linkStyles.primary, linkStyles.large].join(' ');

    return (
      <section className={styles.blogSection}>
        <Container>
          <h2>Ready To Read Our Blog?</h2>
          <BlogItems items={posts} />
        </Container>
        <div className={styles.buttonCase}>
          <Link className={linkClasses} to='/blog'>View Blog</Link>
        </div>
      </section>
    );
  }
}

export default BlogSection;
