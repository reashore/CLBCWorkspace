
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const reactRoot = document.getElementById('reactRoot');
ReactDOM.render(<App />, reactRoot);

registerServiceWorker();
