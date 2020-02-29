import { createStore, combineReducers } from 'redux';
import contacts from '../fixtures/contacts';
import messages from '../fixtures/messages';

// contact actions
// message actions
// ADD_MESSAGE
export const addMessage = (
  {
    contactId = 0,
    otp = 0
  } = {}
)=>({
  type: 'ADD_MESSAGE',
  message: {
    id: '0',
    contactId,
    otp,
    createdAt: 0
  }
});



// contact reducer
//const contactReducerDefaultState = [];
const contactReducerDefaultState = [...contacts];
const contactReducer = (state = contactReducerDefaultState, action)=>{
  switch(action.type){
    default:
      return state;
  }
};

// message reducer
//const messageReducerDefaultState = [];
const messageReducerDefaultState = [...messages];
const messageReducer = (state = messageReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_MESSAGE':
      return [...state, action.message];
    default: 
      return state;
  }
};

// message filter reducer
const messageFilterReducerDefaultState = {
  sortBy: 'date'
};
const messageFilterReducer = (state = messageFilterReducerDefaultState, action)=>{
  switch(action.type){
    default:
      return state;
  }
};

// selectors
const getVisibleMessages = (contacts, { sortBy })=>{
  return contacts.sort((a,b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};

// store creation
const store = createStore(
  combineReducers({
    contacts: contactReducer,
    messages: messageReducer,
    messageFilters: messageFilterReducer
  })
);

console.log(store.getState());
store.subscribe(()=>{
  const state = store.getState();
  //console.log(getVisibleMessages(state.messages, state.messageFilters));
  console.log(state);
});

store.dispatch(addMessage({ contactId: '2', otp: 654321 }));
