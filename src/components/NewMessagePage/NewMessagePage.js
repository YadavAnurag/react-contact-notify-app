import React from 'react';
import './NewMessagePage.css';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/messages';

class NewMessagesPage extends React.Component{

  state = {
    prefix: "Hi, Your OTP is:",
    otp: ""
  }

  onPrefixChange = (e)=> this.setState({ prefix: e.target.value });
  onOtpChange = (e)=> this.setState({ otp: e.target.value });

  onSubmit = (e)=>{
    e.preventDefault();
    const contactId = this.props.match.params.id;
    this.props.addMessage(contactId, this.state.otp);
    console.log(this.state);
    this.props.history.push('/');
  };

  render(){
    const { firstName, middleName, lastName } = this.props.contact;
    const fullName = [firstName, middleName, lastName].join(' ');

    return (
      <div>
        <p>{fullName}</p>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            value={this.state.prefix}
            onChange={this.onPrefixChange}
            placeholder='Enter OTP Prefix'
            required={true}
          />
          <input 
            type="text"
            value={this.state.otp}
            onChange={this.onOtpChange}
            placeholder='OTP'
            required={true}
          />
          <button>Send</button>
        </form>
      </div>
    );
  };
}


const mapStateToPorps = (state, props)=>({
  contact: state.contacts.find(contact => contact.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch)=> ({
  addMessage: (contactId, otp)=> dispatch(addMessage({ contactId, otp }))
});
export default connect(mapStateToPorps, mapDispatchToProps)(NewMessagesPage);