import React, { Component } from 'react';
import axios from '../../shared/axios-teorin';
import BlogItems from '../../components/BlogItems';
import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';

import styles from './blog.module.less';

const preparePosts = data => {
  const posts = [];
  for (let key in data) {
    posts.push({
      id: key,
      ...data[key]
    });
  }
  return posts;
}

class Blog extends Component {
  state = {
    posts: [],
    pageIndex: 0
  };
 
  componentDidMount() {
    const { pageIndex } = this.state;
    this.fetchPosts(pageIndex);
  }

  setPagePosts(posts, pageIndex) {
    this.setState(prevState => ({
      pageIndex,
      posts: [...prevState.posts, ...posts]
    }));
  }

  fetchPosts(pageIndex) {
    const endIndex = pageIndex + 17;
    const query = `?orderBy="$key"&startAt="${pageIndex}"&endAt="${endIndex}"`;
    axios.get('blog.json' + query)
    .then(response => {
      this.setPagePosts(preparePosts(response.data), endIndex + 1);
    })
    .catch(error => {
      console.log(error);
    });
  }

  onClickHandler = () => {
    this.fetchPosts(this.state.pageIndex);
  }

  render() {
    const { posts } = this.state;

    return (
      <Container>
        <h1>Blog</h1>
        <BlogItems items={posts} />
        <div className={styles.buttonCase}>
          <Button onClick={this.onClickHandler}>More</Button>
        </div>
      </Container>
    );
  }
}

export default Blog;
