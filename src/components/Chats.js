import React, { useState, useEffect } from 'react';
import Header from './Header';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Chats() {
  const [chats, setChats] = useState([]);

  const test = async () => {
    try {
      const q = query(collection(db, "gpt"));
      const querySnapshot = await getDocs(q);

      const newChats = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.data());

        const newChat = {
          type: doc.data().type,
          message: doc.data().message,
          time: new Date(doc.data().time.seconds * 1000).toLocaleTimeString(),
        };

        newChats.push(newChat);
      });

      setChats(newChats); // Update the state with the new data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Call the test function when the component mounts
    test();
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h2 style={styles.header}>Chat History</h2>
        <div className="chat-container" style={styles.chatContainer}>
          {chats.map((chat, index) => (
            <div key={index} className={index % 1 === 0 ? "user-chat" : "robot-chat"} style={styles.chat}>
              <div className="message" style={chat.type === 'user' ? styles.userInput : styles.robotOutput}>
                {chat.message}
              </div>
              <div className="timestamp" style={styles.timestamp}>{chat.time}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Remove the button since the function is invoked when the component mounts */}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px', // Increased maximum width
    margin: '0 auto',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  chatContainer: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  chat: {
    borderBottom: '1px solid #ddd',
    padding: '20px', // Increased padding
    display: 'flex',
    flexDirection: 'column',
  },
  userInput: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px', // Increased margin
    alignSelf: 'flex-start',
    background: '#DCF8C6',
    padding: '15px', // Increased padding
    borderRadius: '8px',
  },
  userOutput: {
    fontSize: '16px',
    marginBottom: '10px', // Increased margin
    alignSelf: 'flex-end',
    background: '#DCF8C6',
    padding: '15px', // Increased padding
    borderRadius: '8px',
  },
  robotOutput: {
    fontSize: '16px',
    marginBottom: '10px', // Increased margin
    alignSelf: 'flex-end',
    background: '#EEE',
    padding: '15px', // Increased padding
    borderRadius: '8px',
  },
  timestamp: {
    fontSize: '12px',
    color: '#777',
  },
};

export default Chats;
