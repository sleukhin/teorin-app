import React, { Component } from 'react';
import BlogItems from '../../../components/BlogItems';

class BlogSection extends Component {
  state = {
    posts: [
      { id: 1, url: '/', imgUrl: '/images/1.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 2, url: '/', imgUrl: '/images/2.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 3, url: '/', imgUrl: '/images/3.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 4, url: '/', imgUrl: '/images/4.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 5, url: '/', imgUrl: '/images/5.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
      { id: 6, url: '/', imgUrl: '/images/6.jpg', header: 'We Are Champions At Last Month', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo  rem perferendis provident dolor nesciunt minima consectetur ipsum, architecto...' },
    ]
  };

  render() {
    const { posts } = this.state;

    return <BlogItems posts={posts} />;
  }
}

export default BlogSection;
