const getVisibleMessages = (contacts, { sortBy })=>{
  return contacts.sort((a,b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};

export default getVisibleMessages;