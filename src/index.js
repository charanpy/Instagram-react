import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SocketProvider } from './context/socket';
import store from './redux-sagas/store';
import './index.css';
import App from './App.container';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
}
ReactDOM.render(
  <Provider store={store}>
    <SocketProvider>
      <Router>
        <App />
      </Router>
    </SocketProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
