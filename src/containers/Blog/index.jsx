import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import styles from './blog.module.less';

class Blog extends Component {
  state = {
    posts: [
      { id: 1, url: '/', imgUrl: '/images/1.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 2, url: '/', imgUrl: '/images/2.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 3, url: '/', imgUrl: '/images/3.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 4, url: '/', imgUrl: '/images/4.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 5, url: '/', imgUrl: '/images/5.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 6, url: '/', imgUrl: '/images/6.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <h2>Ready To Read Our Blog?</h2>
          <div className={styles.blog}>
            {
              posts.map(post => (
                <a key={post.id} href={post.url} className={styles.blogItem}>
                  <span
                    className={styles.blogItemImg}
                    style={{ backgroundImage: `url("${post.imgUrl}")` }}
                  />
                  <span className={styles.blogItemContent}>
                    <h4>{post.header}</h4>
                    <p>{post.text}</p>
                  </span>
                </a>
              ))
            }
            <div className={styles.buttonCase}>
              <Button btnType="accent">View Blog</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
