import { v4 as uuid } from 'uuid';

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
    id: uuid(),
    contactId,
    otp,
    createdAt: 0
  }
});

