import React from 'react';
import styles from './blogItems.module.less';

const BlogItem = ({ item }) => (
  <a href={item.url} className={styles.blogItem}>
    <span
      className={styles.blogItemImg}
      style={{ backgroundImage: `url("${item.imageUrl}")` }}
    />
    <span className={styles.blogItemContent}>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
    </span>
  </a>
);

export default BlogItem;
