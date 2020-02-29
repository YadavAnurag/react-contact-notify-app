import messages from '../fixtures/messages';


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

export default messageReducer;