import React from 'react';
import './NewMessagePage.css';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/messages';

class NewMessagesPage extends React.Component{

  state = {
    prefix: "Hi, Your OTP is:",
    otp: "",
    submitting: false,
    error: ''
  }

  onPrefixChange = (e)=> {
    if(!!this.state.error){
      this.setState({ error: '' });
    }
    this.setState({ prefix: e.target.value })
  };
  onOtpChange = (e)=> {
    if(!!this.state.error){
      this.setState({ error: '' });
    }
    this.setState({ otp: e.target.value })
  };
  sendMessageViaAPI = (message)=>{
    const msgObj = {to: this.props.contact.contactNumber, message};
    console.log('sending', msgObj);
    fetch('http://localhost:5555/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(msgObj)
    })
      .then(res => res.json())
      .then(data => {
        if(data.success){
          console.log(data);
          const contactId = this.props.match.params.id;
          this.props.addMessage(contactId, this.state.otp);

          this.setState({ 
            error: 'Message Sent',
            submitting: false,
            otp: ''
          });

        }else{
          this.setState({ error: 'Server Error while sending Message', submitting: false });
        }
      })
      .catch(error => console.log('Error: ',error));
  }

  onSubmit = (e)=>{
    e.preventDefault();
  
    const message = [this.state.prefix, this.state.otp].join(' ');
    if(this.state.prefix && this.state.otp){
      this.sendMessageViaAPI(message);
    }else{
      this.setState({ error: 'Please enter message prefix and OTP' });
    } 
  };

  render(){
    const { firstName, middleName, lastName } = this.props.contact;
    const fullName = [firstName, middleName, lastName].join(' ');

    return (
      <div>
        <p>{fullName}</p>
        {this.state.error ? <p>{this.state.error}</p> : <p></p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            value={this.state.prefix}
            onChange={this.onPrefixChange}
            placeholder='Enter OTP Prefix'
            // required={true}
          />
          <input 
            type="text"
            value={this.state.otp}
            onChange={this.onOtpChange}
            placeholder='OTP'
            // required={true}
          />
          {this.state.submitting ? <button disabled={true}>Sending...</button> : <button>Send</button>}
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