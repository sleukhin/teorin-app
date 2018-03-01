import React, { Component } from 'react';
import BlogItem from './BlogItem';
import styles from './blogItems.module.less';

class BlogItems extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className={styles.blog}>
        {
          items.map(item => (
            <BlogItem key={item.id} item={item} />
          ))
        }
      </div>
    );
  }
}

export default BlogItems;
