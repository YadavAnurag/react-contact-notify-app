import moment from 'moment';

const contacts = [
  {
    id: '1',
    firstName: 'Shiv',
    middleName: 'Shankar',
    lastName: 'Singh',
    contactNumber: '+919170067689',
    email: 'malaviyanshiv@gmail.com',
    createdAt: moment().valueOf()
  },
  {
    id: '2',
    firstName: 'Shivam',
    middleName: '',
    lastName: 'Verma',
    contactNumber: '+919170067689',
    email: 'sv5388@gmail.com',
    createdAt: moment().valueOf()
  },
  {
    id: '3',
    firstName: 'Shivam',
    middleName: '',
    lastName: 'Kushwaha',
    contactNumber: '+919170067689',
    email: 'theskushwaha@gmail.com',
    createdAt: moment().valueOf()
  }
];

export default contacts;