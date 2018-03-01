import React, { Component } from 'react';
import BlogItem from './BlogItem';
import styles from './blogItems.module.less';

class BlogItems extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className={styles.blog}>
        {
          items.map((item, index) => {
            const itemType = ((index - 2) % 6) === 0 || ((index - 3) % 6) === 0
                              ? 'big'
                              : null;
            return <BlogItem key={item.id} itemType={itemType} item={item} />;
          })
        }
      </div>
    );
  }
}

export default BlogItems;
