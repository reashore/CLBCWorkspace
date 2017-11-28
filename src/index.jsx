
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const reactRoot = document.getElementById('reactRoot');

const reducer = function() {
  return {
    junk: 42
  };
};
const store = createStore(reducer);

//ReactDOM.render(<App />, reactRoot);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  reactRoot);

registerServiceWorker();
