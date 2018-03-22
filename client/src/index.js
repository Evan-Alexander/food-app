import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';



import registerServiceWorker from './registerServiceWorker';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
