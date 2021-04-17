import axios from 'axios';

const ApiRequestMethod = {
  post: axios.post,
  put: axios.put,
  get: axios.get,
  patch: axios.patch,
  url: 'http://localhost:3001/api/v1/',
  mainURL: process.env.REACT_APP_API,
};

export default ApiRequestMethod;
