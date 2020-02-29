import { createStore, combineReducers } from 'redux';
import contactReducer from '../reducers/contacts';
import messageReducer from '../reducers/messages';
import messageFilterReducer from '../reducers/message-filters';

export default ()=>{
  
  const store = createStore(
    combineReducers({
      contacts: contactReducer,
      messages: messageReducer,
      messageFilters: messageFilterReducer
    })
  );

  return store;
};