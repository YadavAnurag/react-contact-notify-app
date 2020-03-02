import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import * as serviceWorker from './serviceWorker';


const store = configureStore();
const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));
// serviceWorker.unregister();