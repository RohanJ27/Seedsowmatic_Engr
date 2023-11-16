import React, { useState } from 'react'
import Header from './Header'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
    // ..
  });
    }

    return (
        <div style={styles.container}>
          <Header />
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }} style={styles.form}>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <input type="submit" value="Sign Up" style={styles.submitButton} />
          </form>
          <div style={styles.signInText}>
            <span>Already have an account? </span>
            <a href="/login" style={styles.signInLink}>Log in</a>
          </div>
        </div>
      );
    }
    
    const styles = {
      container: {
      },
      form: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '300px',
        margin: '0 auto',
      },
      input: {
        margin: '10px 0',
        padding: '8px',
        fontSize: '16px',
      },
      submitButton: {
        background: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      },
      signInText: {
        marginTop: '20px',
        fontSize: '14px',
        textAlign: 'center',
      },
      signInLink: {
        color: '#4CAF50',
        textDecoration: 'none',
        marginLeft: '5px',
      },
    };

export default Signup