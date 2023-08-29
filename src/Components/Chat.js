import React, { useState, useContext } from 'react';
import style from '../Styles/chat.module.css';
import { UserContext } from './Userprovider'; // Make sure the path to UserProvider is correct
import { FaCommentAlt, FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function Chat({ currentUser }) {
  const allUsers = useContext(UserContext);
  const [showChat, setShowChat] = useState(false);
  // Fetch messages from API or use dummy data
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    // Update messages array with the new message
    const newMessages = [
      ...messages,
      { id: Date.now(), sender: currentUser.id, text: newMessage }
    ];
    setMessages(newMessages);

    // Clear the input field
    setNewMessage('');
  };

  return (
    <div className={`${style.chatContainer} ${showChat ? style.openedUp : ''}`}>
      <div className={style.chatTogle} onClick={() => setShowChat(!showChat)}>
        <FaCommentAlt className={style.chatIcon} />
        {showChat ? <FaArrowDown className={style.arrowIcon} /> : <FaArrowUp className={style.arrowIcon} />}
      </div>

      {showChat && (
        <div className={style.profiles}>
          {/* User List */}
          <div className={style.userList}>
            <ul>
              {allUsers.map(user => (
                <li key={user.id}>
                  <img src={user.profilepicture} alt={user.name} />
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Messages */}
          <div className={style.messages}>
            {messages.map(message => (
              <div
                key={message.id}
                className={
                  message.sender === currentUser.id ? style.sent : style.received
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Container */}
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
