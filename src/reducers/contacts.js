import contacts from '../fixtures/contacts';

// contact reducer
//const contactReducerDefaultState = [];
const contactReducerDefaultState = [...contacts];
const contactReducer = (state = contactReducerDefaultState, action)=>{
  switch(action.type){
    default:
      return state;
  }
};

export default contactReducer;