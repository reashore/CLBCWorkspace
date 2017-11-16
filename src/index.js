
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const reactRoot = document.getElementById('reactRoot');
ReactDOM.render(<App />, reactRoot);

registerServiceWorker();
