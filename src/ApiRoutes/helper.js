import axios from 'axios';

const ApiRequestMethod = {
  post: axios.post,
  put: axios.put,
  get: axios.get,
  patch: axios.patch,
  delete: axios.delete,
  url: process.env.REACT_APP_API,
  mainURL: process.env.REACT_APP_API,
};

export default ApiRequestMethod;
