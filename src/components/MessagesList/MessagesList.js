import React from 'react';
import MessagesListItem from '../MessagesListItem/MessagesListItem';
import { connect } from 'react-redux';

const MessagesList = ({ messages })=>{
  
  return (
    <div>
      <h2 className='component-title'>Messages Log</h2>
      <div className='component-body'>
        {
          messages.length === 0 ? (
            <p>No messages</p>
          ) : (
            messages.map((message)=>{
              return <MessagesListItem key={message.id} message={message} />
            })
          )
        }
      </div>
    </div>
  );
}

//export default MessagesList;
const mapStateToProps = (state)=>({
  messages: state.messages
});
export default connect(mapStateToProps)(MessagesList);