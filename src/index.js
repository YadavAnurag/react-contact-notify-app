import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Contact from './playground/contact';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import moment from 'moment';

const store = configureStore();
store.subscribe(()=>{
  const state = store.getState();
  //console.log(getVisibleMessages(state.messages, state.messageFilters));
  console.log(state);
});
// store.dispatch(addMessage({ contactId: '10', otp: 654321 }));


//console.log(moment());

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));


// for development
serviceWorker.register();

// for production
//serviceWorker.unregister();