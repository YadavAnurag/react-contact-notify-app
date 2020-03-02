import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/messages';

class NewMessagesPage extends React.Component{

  state = {
    prefix: "Hi, Your OTP is: ",
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
    this.setState({ otp: e.target.value });
  };
  finalValidate = ()=>{
    let otpValidate = false;
    let prefixValidate = false;

    if(this.state.otp.length === 6 && !isNaN(this.state.otp)){
      otpValidate  = true;
    }else{
      this.setState({ error: 'Enter 6 digit OTP' });
    }

    if(!!this.state.prefix.length){
      prefixValidate = true;
    }else{
      this.setState({ error: 'Enter text to be sent with OTP' });
    }
    return otpValidate && prefixValidate;
  };
  sendMessageViaAPI = (message)=>{
    const msgObj = {to: this.props.contact.contactNumber, message};
    console.log('sending', msgObj);

    const PATH_BASE = 'https://api.textlocal.in';
    const API_KEY = 'WDqSw5pfGss-WACxdmZhTsKqLqIxWNTYncpnPpla6h';
    const TEXT_LOCAL_URL_PATH = `/send/?apikey=${API_KEY}&numbers=${this.props.contact.contactNumber}&message=${message}`;
    const urlTextLocal = `${PATH_BASE}${TEXT_LOCAL_URL_PATH}`;
    console.log(encodeURI(urlTextLocal));
    fetch(urlTextLocal, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'}
    }).then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
        if(data.status === 'failure'){
          this.setState({ 
            error: 'Message not sent... ServerError',
            submitting: false,
            otp: ''
          });
        }else{
          const contactId = this.props.match.params.id;
          this.props.addMessage(contactId, this.state.otp);
          this.setState({ 
            error: 'Message Sent',
            submitting: false,
            otp: ''
          });
        }
      })
      .catch(error => {
        this.setState({ error: 'Failed to send request to server', submitting: false });
        console.log('Error: ', error);
      });

    // fetch('http://localhost:4000/compose/api/messages', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json'},
    //   body: JSON.stringify(msgObj)
    // })
    //   .then(res => {
    //     console.log(res);
    //     return res.json()
    //   })
    //   .then(data => {
    //     if(data.success){
    //       console.log(data);
    //       const contactId = this.props.match.params.id;
    //       this.props.addMessage(contactId, this.state.otp);
    //       this.setState({ 
    //         error: 'Message Sent',
    //         submitting: false,
    //         otp: ''
    //       });
    //     }else{
    //       this.setState({ error: 'Server Error while sending OTP', submitting: false });
    //     }
    //   })
    //   .catch(error => {
    //     this.setState({ error: 'Failed to send request to server', submitting: false });
    //     console.log('Error: ', error);
    //   });
  }

  onSubmit = (e)=>{
    e.preventDefault();
  
    if(this.finalValidate()){
      const message = [this.state.prefix.trim(), this.state.otp].join(' ');
      this.sendMessageViaAPI(message);
    }
  };

  render(){
    const { firstName, middleName, lastName, contactNumber } = this.props.contact;
    const fullName = [firstName, middleName, lastName].join(' ');

    return (
      <div>
        <h2 className='component-title'>Compose</h2>
        <div className='component-body'>
          <div className='compose'>
            <p className='compose-name'>{fullName}</p>
            <p className='compose-number'>{contactNumber}</p>
            <form onSubmit={this.onSubmit}>
              <input 
                type="text"
                value={this.state.prefix}
                onChange={this.onPrefixChange}
                placeholder='Enter OTP Prefix'
                className='input-prefix'
                // required={true}
              />
              <input 
                type="text"
                value={this.state.otp}
                onChange={this.onOtpChange}
                placeholder='OTP'
                className='input-otp'
                // required={true}
              />
              <div className='compose-button-div'>
                {this.state.error ? (
                  <p className='compose-error'>{this.state.error}</p>
                ) : <p className='compose-error'></p>}
                <div className='button-div'>
                  {this.state.submitting ? (
                    <button disabled={true} className='button'>Sending...</button>
                  ) : (
                    <button className='button'>Send</button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
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