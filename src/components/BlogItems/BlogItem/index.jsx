import React from 'react';
import styles from './blogItems.module.less';

const BlogItem = ({ item }) => (
  <a href={item.url} className={styles.blogItem}>
    <span
      className={styles.blogItemImg}
      style={{ backgroundImage: `url("${item.imgUrl}")` }}
    />
    <span className={styles.blogItemContent}>
      <h4>{item.header}</h4>
      <p>{item.text}</p>
    </span>
  </a>
);

export default BlogItem;
