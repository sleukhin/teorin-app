import React, { Component } from 'react';
import axios from 'axios';
import BlogItems from '../../components/BlogItems';

class Blog extends Component {
  state = {
    posts: [
      { id: 1, url: '/', imageUrl: '/images/1.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 2, url: '/', imageUrl: '/images/2.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 3, url: '/', imageUrl: '/images/3.jpg', title: 'We Are Champions At Last Month', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
    ]
  };

  preparePosts(data) {
    const posts = [];
    for (let key in data) {
      posts.push({
        id: key,
        ...data[key]
      });
    }
    return posts;
  }

  setPosts(posts) {
    this.setState({ posts: posts });
  }

  componentDidMount() {
    axios.get('https://teorin-core.firebaseio.com/blog.json')
      .then(response => {
        this.setPosts(this.preparePosts(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <h1>Blog</h1>
        <BlogItems items={posts} />
      </React.Fragment>
    );
  }
}

export default Blog;
