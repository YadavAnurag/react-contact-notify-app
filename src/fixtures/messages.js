import moment from 'moment';

const messages = [
  {
    id: '1',
    contactId: '1',
    otp: 123456,
    createdAt: moment().subtract(1, 'month').valueOf()
  },
  {
    id: '2',
    contactId: '2',
    otp: 896532,
    createdAt: moment().subtract(3, 'days').valueOf()
  },
  {
    id: '3',
    contactId: '3',
    otp: 853621,
    createdAt: moment().subtract(1, 'day').valueOf()
  }
];

export default messages;