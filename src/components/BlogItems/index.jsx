import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import BlogItem from './BlogItem';
import styles from './blogItems.module.less';

class BlogItems extends Component {
  render() {
    const { posts } = this.props;

    return (
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <h2>Ready To Read Our Blog?</h2>
          <div className={styles.blog}>
            {
              posts.map(post => (
                <BlogItem key={post.id} item={post} />
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

export default BlogItems;
