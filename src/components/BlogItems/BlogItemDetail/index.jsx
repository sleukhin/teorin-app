import React, { Component } from 'react';
import axios from 'axios';
import Conatainer from '../../UI/Container';
import styles from './blogItemDetail.module.less';

const preparePost = data => {
  const key = Object.keys(data)[0];
  const post = {
    id: key,
    ...data[key]
  };
  return post;
};

class BlogItemDetail extends Component {
  state = {
    item: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const query = `?orderBy="$key"&&equalTo="${id}"`;

    axios
      .get('https://teorin-core.firebaseio.com/blog.json' + query)
      .then(response => {
        this.setState({ item: preparePost(response.data) });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { item } = this.state;
    let post = null;

    if (item) {
      post = (
        <div>
          <h1>{item.title}</h1>
          <img
            className={styles.imgResponsive}
            src={item.imageUrl}
            alt={item.title}
          />
          <span >
            <p>{item.body}</p>
          </span>
        </div>
      );
    }

    return <Conatainer>{post}</Conatainer>;
  }
}

export default BlogItemDetail;
