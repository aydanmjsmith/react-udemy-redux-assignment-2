import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import personReducer from './store/reducer/PersonReducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const appStore = createStore(personReducer);

ReactDOM.render(<Provider store={appStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
