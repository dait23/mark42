import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppStore from './stores/app.store';
import App from './App';

//const data = new AppStore();

// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
