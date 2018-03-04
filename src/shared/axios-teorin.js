import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://teorin-core.firebaseio.com/'
});

export default instance;
