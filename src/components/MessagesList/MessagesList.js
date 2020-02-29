import React from 'react';
import MessagesListItem from '../MessagesListItem/MessagesListItem';
import './MessagesList.css';
import { connect } from 'react-redux';

const MessagesList = ({ messages })=>{
  
  return (
    <div>
      <h2>MessagesList</h2>
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
  );
}

//export default MessagesList;
const mapStateToProps = (state)=>({
  messages: state.messages
});
export default connect(mapStateToProps)(MessagesList);