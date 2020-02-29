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

export default messageFilterReducer;