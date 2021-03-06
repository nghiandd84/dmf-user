import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import store from './root/index';

const Root = () => (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
console.log(store);
ReactDOM.render(<Root />, document.getElementById('root'));
