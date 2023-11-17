import React, { useState } from 'react';
import Header from './Header';

function Chats() {
  const [chats, setChats] = useState([
    { input: 'How far can you travel?', output: 'I can travel up to 10 meters between each seed planting.', timestamp: '12:00 PM' },
    { input: 'Plant 5 seeds for me.', output: 'Sure, I will plant 5 seeds with a distance of 2 meters between each.', timestamp: '12:05 PM' },
  ]);

  const addChat = (input, output) => {
    setChats([...chats, { input, output, timestamp: new Date().toLocaleTimeString() }]);
  };

  return (
    <div style={styles.container}>
    <Header />
      <h2 style={styles.header}>Chat History</h2>
      <div className="chat-container" style={styles.chatContainer}>
        {chats.map((chat, index) => (
          <div key={index} className="chat" style={styles.chat}>
            <div className="user-input" style={styles.userInput}>{chat.input}</div>
            <div className="robot-output" style={styles.robotOutput}>{chat.output}</div>
            <div className="timestamp" style={styles.timestamp}>{chat.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  chatContainer: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  chat: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  userInput: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  robotOutput: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  timestamp: {
    fontSize: '12px',
    color: '#777',
  },
};

export default Chats;
