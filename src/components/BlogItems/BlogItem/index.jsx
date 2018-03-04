import React from 'react';
import { Link } from 'react-router-dom';
import styles from './blogItems.module.less';

const BlogItem = ({ match, item, itemType = 'small' }) => {
  const cssClasses = [styles.blogItem, styles[itemType]].join(' ');

  return (
    <Link to={`/blog/${item.id}`} className={cssClasses}>
      <span
        className={styles.blogItemImg}
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
      />
      <span className={styles.blogItemContent}>
        <h4>{item.title}</h4>
        <p>{item.body}</p>
      </span>
    </Link>
  );
};

export default BlogItem;
