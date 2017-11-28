
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const reactRoot = document.getElementById('reactRoot');

const reducer = function () {
  return {
    junk: 42
  };
};

const store = createStore(reducer);

const rootComponent =
  <Provider store={store}>
    <App />
  </Provider>;

//ReactDOM.render(<App />, reactRoot);
ReactDOM.render(rootComponent, reactRoot);

registerServiceWorker();
